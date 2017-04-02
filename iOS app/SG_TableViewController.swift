//
//  SG_TableViewController.swift
//  socialgood
//
//  Created by Andreu Gallofré I Bahon on 1/4/17.
//  Copyright © 2017 Andreu Gallofré I Bahon. All rights reserved.
//

import UIKit

class SG_TableViewController: UITableViewController {

    //
    //  TableController.swift
    //  uitableview_load_data_from_json_swift_3
    //
        var TableData:Array< String > = Array < String >()
    
        override func viewDidLoad() {
            super.viewDidLoad()
            self.tableView.register(UITableViewCell.self, forCellReuseIdentifier: "cell")
//            get_data_from_url("http://www.kaleidosblog.com/tutorial/tutorial.json")
//            get_data_from_url("http://agallofre.me/transactions")
        }
    
        override func numberOfSections(in tableView: UITableView) -> Int {
            return 1
        }
        
        override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
            return TableData.count
        }
        
        
        override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
            let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
            
            cell.textLabel?.text = TableData[indexPath.row]
            
            return cell
        }
    
        
        func get_data_from_url(_ link:String)
        {
            let url:URL = URL(string: link)!
            let session = URLSession.shared
            
            let request = NSMutableURLRequest(url: url)
            request.httpMethod = "GET"
            request.cachePolicy = NSURLRequest.CachePolicy.reloadIgnoringCacheData
            
            
            let task = session.dataTask(with: request as URLRequest, completionHandler: {
                (
                data, response, error) in
                
                guard let _:Data = data, let _:URLResponse = response  , error == nil else {
                    
                    return
                }
                
                
                self.extract_json(data!)
                
                
            })
            
            task.resume()
            
        }
        
        
        func extract_json(_ data: Data)
        {
            
            
            let json: Any?
            
            do
            {
                json = try JSONSerialization.jsonObject(with: data, options: [])
            }
            catch
            {
                return
            }
            
            guard let data_list = json as? NSArray else
            {
                return
            }
            
            
           if let transaction_list = json as? NSArray
            {
                for i in 0 ..< data_list.count
                {
                    if let transaction = transaction_list[i] as? NSDictionary
                    {
                        if let details = transaction["details"] as? NSDictionary
                        {
                            if let date = details["completed"] as? String
                            {
                                /*if let amount_arr = details["value"] as? NSDictionary
                                {
                                    if let amount = amount_arr["amount"] as? String
                                    {
                                        TableData.append(date + " [" + amount + "]")
                                    }
                                }*/
                                TableData.append(date)
                            }
                        }
                    }
                }
     
     }
     }
     
    
           
        
        func do_table_refresh()
        {
            self.tableView.reloadData()
            
        }
        
        
}


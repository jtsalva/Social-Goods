//
//  SecondViewController.swift
//  socialgood
//
//  Created by Andreu Gallofré I Bahon on 1/4/17.
//  Copyright © 2017 Andreu Gallofré I Bahon. All rights reserved.
//

import UIKit

class SecondViewController: UIViewController {

    @IBOutlet weak var statusLabel: UILabel!
    var status: String = ""
    
    override func viewDidLoad() {
        super.viewDidLoad()
//        statusLabel.text = status
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}

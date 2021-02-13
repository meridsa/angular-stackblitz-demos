import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cytoscape-test",
  templateUrl: "./cytoscape-test.component.html",
  styleUrls: ["./cytoscape-test.component.css"]
})
export class CytoscapeTestComponent implements OnInit {
  cytoscape: any;

  constructor() {

    this.cytoscape = require('cytoscape');
  }

  ngOnInit() {
    let cy = this.cytoscape({
      container: document.getElementById("cy"),
      elements: [
        { group: "nodes", data: { id: "n0" }, position: { x: 100, y: 100 } },
        { group: "nodes", data: { id: "n1" }, position: { x: 200, y: 200 } },
        { group: "edges", data: { id: "e0", source: "n0", target: "n1" } }
      ]
    });
  }
}

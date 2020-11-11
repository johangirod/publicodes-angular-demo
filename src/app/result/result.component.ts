import { Component, OnChanges, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { EngineService } from "../engine.service";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnChanges {  
  @Input() situation;
  indemnite: string;

  constructor(private engineService: EngineService) {}
  
  ngOnChanges(changes) {
    this.engineService.setSituation(changes.situation.currentValue)
    this.indemnite = this.engineService.evaluate("indemnité");
  }
}

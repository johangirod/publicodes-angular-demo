import { Injectable } from "@angular/core";
import rules from "../rules";
import Engine, { formatValue } from "publicodes";

@Injectable({
  providedIn: "root"
})
export class EngineService {
  engine: Engine<string>;
  situation: Record<string, string> = {};

  constructor() {
    this.engine = new Engine(rules);
  }

  setSituation(rule: string, value: string) {
    this.situation[rule] = value;
    this.engine.setSituation(this.situation);
  }

  evaluate(expression: string) {
    return formatValue(this.engine.evaluate(expression));
  }
}


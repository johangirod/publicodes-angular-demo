import { Injectable } from "@angular/core";
import rules from "../rules";
import Engine, { formatValue } from "publicodes";

@Injectable({
  providedIn: "root"
})
export class EngineService {
  engine: Engine<string>;

  constructor() {
    this.engine = new Engine(rules);
  }

  evaluate(expression: string) {
    return formatValue(this.engine.evaluate(expression));
  }
}


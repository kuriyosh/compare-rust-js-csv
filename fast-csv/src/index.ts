import { parseFile } from "@fast-csv/parse";
import { performance, PerformanceObserver } from "node:perf_hooks";

const perfObserver = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

perfObserver.observe({ entryTypes: ["measure"], buffered: true });

(async () => {
  const filename = process.argv[2];
  performance.mark("start");
  const res = await new Promise((resolve, reject) => {
    parseFile(filename)
      .on("error", (error) => reject(error))
      .on("data", () => {})
      .on("end", (rowCount: number) => resolve(rowCount));
  });
  performance.mark("end");
  performance.measure("parse csv", "start", "end");
  console.log(res);
})();

# rust-csv と fast-csv の比較

1 行毎にシリアライズする時間を見る

| case                   | fast-csv  | rust-csv  |
| ---------------------- | --------- | --------- |
| 34,959,673 lines/818MB | 83.574sec | 53.314sec |
| 1,000,000 lines/134MB  | 6.235sec  | 2.389sec  |

ref:

- https://www.alxolr.com/articles/how-to-process-a-csv-file-five-times-faster-in-node-js-with-rust-and-napi-rs

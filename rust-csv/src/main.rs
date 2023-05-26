use std::env;
use std::time::Instant;

fn main() {
    let args: Vec<String> = env::args().collect();

    let mut rdr = csv::Reader::from_path(args[1].to_string()).unwrap();

    let start = Instant::now();

    for record in rdr.records() {}

    let duration = start.elapsed();

    println!("{:?}", duration);
}

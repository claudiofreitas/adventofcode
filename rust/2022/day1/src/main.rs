use std::fs;

fn calculate_max_calories() -> i32 {
    let file_path = "sample.txt";
    println!("In file {}", file_path);
    let contents = fs::read_to_string(file_path).expect("Should have been able to read the file");
    let lines: Vec<&str> = contents.split_terminator("\n").collect();

    let mut total_calories_by_elf: Vec<i32> = Vec::new();
    let mut accumulator: i32 = 0;
    for line in &lines {
        if line.to_string() != "" {
            accumulator += line.parse::<i32>().unwrap();
        } else {
            total_calories_by_elf.push(accumulator);
            accumulator = 0;
        }
    }
    if accumulator != 0 {
        total_calories_by_elf.push(accumulator);
    }
    // dbg!(total_calories_by_elf);
    total_calories_by_elf.sort_by(|a, b| b.cmp(a));
    return total_calories_by_elf[0];
}

fn main() {
    let solution = calculate_max_calories();
    dbg!(solution);
}

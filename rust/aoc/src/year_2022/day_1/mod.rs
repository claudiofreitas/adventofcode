#![allow(dead_code)]

fn solve_part_1(lines: &Vec<&str>) -> i32 {
    let mut total_calories_by_elf: Vec<i32> = Vec::new();
    let mut accumulator: i32 = 0;
    for line in lines {
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

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;

    #[test]
    fn it_solves_part_1_sample() {
        let file_path = "./src/year_2022/day_1/sample.txt";
        let contents =
            fs::read_to_string(file_path).expect("Should have been able to read the file");
        let lines: Vec<&str> = contents.split_terminator("\n").collect();

        let result = solve_part_1(&lines);
        assert_eq!(result, 24_000);
    }

    #[test]
    fn it_solves_part_1_real() {
        let file_path = "./src/year_2022/day_1/input.txt";
        let contents =
            fs::read_to_string(file_path).expect("Should have been able to read the file");
        let lines: Vec<&str> = contents.split_terminator("\n").collect();

        let result = solve_part_1(&lines);
        assert_eq!(result, 70_116);
    }
}

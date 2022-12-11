#![allow(dead_code)]

fn solve_part_1(lines: &Vec<String>) -> u32 {
    let mut total_calories_by_elf: Vec<u32> = Vec::new();
    let mut accumulator: u32 = 0;
    for line in lines {
        if line.to_string() != "" {
            accumulator += line.parse::<u32>().unwrap();
        } else {
            total_calories_by_elf.push(accumulator);
            accumulator = 0;
        }
    }
    if accumulator != 0 {
        total_calories_by_elf.push(accumulator);
    }
    total_calories_by_elf.sort_by(|a, b| b.cmp(a));
    return total_calories_by_elf[0];
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;

    fn read_file_lines(file_path: &str) -> Vec<String> {
        let mut lines: Vec<String> = Vec::new();

        let contents: String =
            fs::read_to_string(file_path).expect("Should have been able to read the file");

        for line in contents.lines() {
            lines.push(line.to_string());
        }

        return lines;
    }

    #[test]
    fn it_solves_part_1_sample() {
        let file_path = "./src/year_2022/day_1/sample.txt";
        let lines = read_file_lines(file_path);
        let result = solve_part_1(&lines);
        assert_eq!(result, 24_000);
    }

    #[test]
    fn it_solves_part_1_real() {
        let file_path = "./src/year_2022/day_1/input.txt";
        let lines = read_file_lines(file_path);
        let result = solve_part_1(&lines);
        assert_eq!(result, 70_116);
    }
}

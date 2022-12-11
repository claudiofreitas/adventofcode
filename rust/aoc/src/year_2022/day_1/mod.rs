#![allow(dead_code)]

fn calculate_total_calories_by_elf(lines: &Vec<String>) -> Vec<u32> {
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
    return total_calories_by_elf;
}

pub fn solve_part_1(lines: &Vec<String>) -> u32 {
    let mut total_calories_by_elf: Vec<u32> = calculate_total_calories_by_elf(&lines);
    total_calories_by_elf.sort_by(|a, b| b.cmp(a));
    return total_calories_by_elf[0];
}

pub fn solve_part_2(lines: &Vec<String>) -> u32 {
    let mut total_calories_by_elf: Vec<u32> = calculate_total_calories_by_elf(&lines);
    total_calories_by_elf.sort_by(|a, b| b.cmp(a));
    return total_calories_by_elf[0] + total_calories_by_elf[1] + total_calories_by_elf[2];
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::utils::read_file_lines;

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

    #[test]
    fn it_solves_part_2_sample() {
        let file_path = "./src/year_2022/day_1/sample.txt";
        let lines = read_file_lines(file_path);
        let result = solve_part_2(&lines);
        assert_eq!(result, 45_000);
    }

    #[test]
    fn it_solves_part_2_real() {
        let file_path = "./src/year_2022/day_1/input.txt";
        let lines = read_file_lines(file_path);
        let result = solve_part_2(&lines);
        assert_eq!(result, 206_582);
    }
}

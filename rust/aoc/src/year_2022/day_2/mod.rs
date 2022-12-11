#![allow(dead_code)]

pub fn solve_part_1(lines: &Vec<String>) -> u32 {
    let mut total_score: u32 = 0;
    for line in lines {
        let round_score = match line.as_str() {
            "A X" => Some(3 + 1),
            "A Y" => Some(6 + 2),
            "A Z" => Some(0 + 3),

            "B X" => Some(0 + 1),
            "B Y" => Some(3 + 2),
            "B Z" => Some(6 + 3),

            "C X" => Some(6 + 1),
            "C Y" => Some(0 + 2),
            "C Z" => Some(3 + 3),
            _ => None,
        };
        total_score += round_score.unwrap();
    }

    return total_score;
}

#[cfg(test)]
mod test {
    use super::solve_part_1;
    use crate::utils::read_file_lines;

    #[test]
    fn it_solves_part_1_sample() {
        let file_path = "./src/year_2022/day_2/sample.txt";
        let lines = read_file_lines(file_path);
        let result = solve_part_1(&lines);
        assert_eq!(result, 15);
    }

    #[test]
    fn it_solves_part_1_real() {
        let file_path = "./src/year_2022/day_2/input.txt";
        let lines = read_file_lines(file_path);
        let result = solve_part_1(&lines);
        assert_eq!(result, 11_666);
    }
}

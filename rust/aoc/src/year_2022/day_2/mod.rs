#![allow(dead_code)]

#[derive(Debug)]
enum Shape {
    Rock,
    Paper,
    Scissors,
}

impl Shape {
    fn from(string_shape: &str) -> Shape {
        match string_shape {
            "A" | "X" => Shape::Rock,
            "B" | "Y" => Shape::Paper,
            "C" | "Z" => Shape::Scissors,
            _ => panic!("Impossible to converto into Shape. Unexpected shape: {string_shape}"),
        }
    }

    fn score(&self) -> u32 {
        match self {
            Shape::Rock => 1,
            Shape::Paper => 2,
            Shape::Scissors => 3,
        }
    }

    fn get_winner(&self) -> Shape {
        match self {
            Shape::Rock => Shape::Paper,
            Shape::Paper => Shape::Scissors,
            Shape::Scissors => Shape::Rock,
        }
    }

    fn get_loser(&self) -> Shape {
        match self {
            Shape::Paper => Shape::Rock,
            Shape::Scissors => Shape::Paper,
            Shape::Rock => Shape::Scissors,
        }
    }
}

#[derive(Debug)]
enum MatchResult {
    Win,
    Draw,
    Lose,
}

impl MatchResult {
    fn from(match_result_string: &str) -> MatchResult {
        match match_result_string {
            "X" => MatchResult::Lose,
            "Y" => MatchResult::Draw,
            "Z" => MatchResult::Win,
            _ => panic!(
                "Unexpected match result. Received {:?}",
                match_result_string
            ),
        }
    }

    fn calculate_from(opponent_shape: &Shape, my_shape: &Shape) -> MatchResult {
        match (&opponent_shape, &my_shape) {
            (Shape::Scissors, Shape::Rock) => MatchResult::Win,
            (Shape::Paper, Shape::Scissors) => MatchResult::Win,
            (Shape::Rock, Shape::Paper) => MatchResult::Win,
            (Shape::Rock, Shape::Rock) => MatchResult::Draw,
            (Shape::Paper, Shape::Paper) => MatchResult::Draw,
            (Shape::Scissors, Shape::Scissors) => MatchResult::Draw,
            _ => MatchResult::Lose,
        }
    }

    fn get_points(&self) -> u32 {
        match &self {
            MatchResult::Win => 6,
            MatchResult::Draw => 3,
            MatchResult::Lose => 0,
        }
    }
}

pub fn solve_part_1(lines: &Vec<String>) -> u32 {
    return lines
        .iter()
        .map(|line| {
            let (opponent_shape, my_shape) = line.split_once(" ").unwrap();
            let opponent_shape = Shape::from(opponent_shape);
            let my_shape = Shape::from(my_shape);

            let outcome = MatchResult::calculate_from(&opponent_shape, &my_shape);
            outcome.get_points() + my_shape.score()
        })
        .sum();
}

pub fn solve_part_2(lines: &Vec<String>) -> u32 {
    lines
        .iter()
        .map(|line| {
            let (opponent_shape, match_result) = line.split_once(" ").unwrap();
            let theirs = Shape::from(opponent_shape);

            match MatchResult::from(match_result) {
                MatchResult::Win => theirs.get_winner().score() + 6,
                MatchResult::Draw => theirs.score() + 3,
                MatchResult::Lose => theirs.get_loser().score() + 0,
            }
        })
        .sum()
}

#[cfg(test)]
mod test {
    use super::solve_part_1;
    use super::solve_part_2;
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

    #[test]
    fn it_solves_part_2_sample() {
        let file_path = "./src/year_2022/day_2/sample.txt";
        let lines = read_file_lines(file_path);
        let result = solve_part_2(&lines);
        assert_eq!(result, 12);
    }

    #[test]
    fn it_solves_part_2_real() {
        let file_path = "./src/year_2022/day_2/input.txt";
        let lines = read_file_lines(file_path);
        let result = solve_part_2(&lines);
        assert_eq!(result, 12767);
    }
}

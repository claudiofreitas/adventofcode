#![allow(dead_code)]

#[derive(Debug)]
enum Shape {
    Rock,
    Paper,
    Scissors,
}

pub fn solve_part_1(lines: &Vec<String>) -> u32 {
    let mut total_score: u32 = 0;
    for line in lines {
        let shape_tuple = line.split(" ").map(|string_shape| {
            return match string_shape {
                "A" | "X" => Some(Shape::Rock),
                "B" | "Y" => Some(Shape::Paper),
                "C" | "Z" => Some(Shape::Scissors),
                _ => panic!("Impossible to converto into Shape. Unexpected shape: {string_shape}"),
            }
            .unwrap();
        });

        let collected_tuple = shape_tuple.collect::<Vec<Shape>>();

        let outcome_score = match &collected_tuple[..2] {
            [Shape::Scissors, Shape::Rock] => Some(6),
            [Shape::Paper, Shape::Scissors] => Some(6),
            [Shape::Rock, Shape::Paper] => Some(6),

            [Shape::Rock, Shape::Rock] => Some(3),
            [Shape::Paper, Shape::Paper] => Some(3),
            [Shape::Scissors, Shape::Scissors] => Some(3),

            [_, _] => Some(0),

            _ => panic!("Impossible to calculate outcome score"),
        }
        .unwrap();

        let shape_score = match &collected_tuple[..2] {
            [_, Shape::Rock] => Some(1),
            [_, Shape::Paper] => Some(2),
            [_, Shape::Scissors] => Some(3),
            _ => panic!("Impossible to calculate shape score"),
        }
        .unwrap();

        total_score += outcome_score + shape_score;
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

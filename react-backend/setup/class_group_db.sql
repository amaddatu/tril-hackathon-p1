
CREATE DATABASE class_group_db;

USE class_group_db;

CREATE TABLE IF NOT EXISTS `attributes` (
  `attribute_id` INT NOT NULL AUTO_INCREMENT,
  `attribute_name` VARCHAR(45) NULL,
  PRIMARY KEY (`attribute_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `groups` (
  `group_id` INT NOT NULL AUTO_INCREMENT,
  `group_name` VARCHAR(45) NULL,
  `project_id` INT NULL,
  PRIMARY KEY (`group_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `students` (
  `student_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(128) NULL,
  `last_name` VARCHAR(128) NULL,
  `middle_name` VARCHAR(128) NULL,
  `status` VARCHAR(45) NULL,
  PRIMARY KEY (`student_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `student_groups` (
  `student_id` INT NOT NULL,
  `group_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`student_id`, `group_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `projects` (
  `project_id` INT NOT NULL AUTO_INCREMENT,
  `project_name` VARCHAR(45) NULL,
  PRIMARY KEY (`project_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `student_attributes` (
  `student_id` INT NOT NULL,
  `attribute_id` INT NOT NULL,
  PRIMARY KEY (`student_id`, `attribute_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `jobs` (
  `job_id` INT NOT NULL,
  `job_name` VARCHAR(45) NULL,
  PRIMARY KEY (`job_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `job_attributes` (
  `job_id` INT NOT NULL,
  `attribute_id` INT NOT NULL,
  PRIMARY KEY (`job_id`, `attribute_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `class_group_db`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NULL,
  `password` VARCHAR(128) NULL,
  `name` VARCHAR(45) NULL,
  `role` VARCHAR(45) NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_name_UNIQUE` (`user_name` ASC))
ENGINE = InnoDB
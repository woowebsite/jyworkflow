-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 03, 2021 at 04:01 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jyworkflow`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `compound_id` varchar(255) DEFAULT NULL,
  `provider_type` varchar(255) DEFAULT NULL,
  `provider_id` varchar(255) DEFAULT NULL,
  `provider_account_id` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `refresh_token` text DEFAULT NULL,
  `access_token` text DEFAULT NULL,
  `access_token_expires` timestamp(6) NULL DEFAULT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `compound_id`, `provider_type`, `provider_id`, `provider_account_id`, `user_id`, `refresh_token`, `access_token`, `access_token_expires`, `created_at`, `updated_at`) VALUES
(1, 'ad604aab9bc2c81be39f7a79013ad22f601877e3bca766e31e60bc33a5d67445', 'oauth', 'facebook', '4520310414664462', 28, NULL, 'EAAPrlRQbkdgBAGrkrcEPsW4DXvaZBtDvtgNok9hU0ec4sbrsHHKuMZA24TETCZCP8f4aOIwzx8RztYZC5JzHSNpWsrabeht9Xuo6ZAS5HP6P3abV42qYIIbOgnopiIbPZABfMNZAFY5KaYHt5tPP37RI1bonDlcTekiG5TM4dugFwZDZD', NULL, '2021-04-18 16:35:42.664533', '2021-04-18 16:35:42.664533');

-- --------------------------------------------------------

--
-- Table structure for table `Albums`
--

CREATE TABLE `Albums` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Categories`
--

CREATE TABLE `Categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `parentId` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Filters`
--

CREATE TABLE `Filters` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `conditions` varchar(255) DEFAULT NULL,
  `model_name` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Filters`
--

INSERT INTO `Filters` (`id`, `title`, `conditions`, `model_name`, `status`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Nhân viên', '{\"role_id\":4}', 'User', 'A', 1, '2021-05-15 12:28:06', '2021-05-15 12:28:06'),
(2, 'VIP', '{\"metadata\":{\"key\":\"customerType\", \"value\":\"1\"}}', 'Customer', 'A', 1, '2021-05-15 12:28:06', '2021-05-15 12:28:06'),
(4, 'Khách hàng', '{\"role_id\":5}', 'User', 'A', 1, '2021-06-20 17:55:48', '2021-06-20 17:55:48'),
(5, 'Thông thường', '{\"metadata\":{\"key\":\"customerType\", \"value\":\"2\"}}', 'Customer', 'A', 1, '2021-06-20 17:55:48', '2021-06-20 17:55:48'),
(7, 'Mới tạo', '{\"job\": {\"status\": \"A\"}, \"taxonomies\":[13]}', 'Job', 'A', 1, '2021-06-20 18:01:28', '2021-06-20 18:01:28'),
(8, 'Hoàn thành', '{\"job\": {\"status\": \"F\"}, \"taxonomies\":[8]}', 'Job', 'A', 1, '2021-06-20 18:01:28', '2021-06-20 18:01:28');

-- --------------------------------------------------------

--
-- Table structure for table `Images`
--

CREATE TABLE `Images` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `productBaseId` int(11) DEFAULT NULL,
  `productBaseImageId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `JobMeta`
--

CREATE TABLE `JobMeta` (
  `id` int(11) NOT NULL,
  `key` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `data` text NOT NULL,
  `job_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `JobMeta`
--

INSERT INTO `JobMeta` (`id`, `key`, `value`, `type`, `data`, `job_id`, `createdAt`, `updatedAt`) VALUES
(1112, 'link', 'abc\nupdate linkdsdsd', 'string', 'abc\nupdate linkdsdsd', 98, '2021-08-25 15:25:23', '2021-08-26 06:43:42'),
(1113, 'isDemoColor', 'true', 'boolean', 'true', 98, '2021-08-25 15:25:23', '2021-08-26 06:43:42'),
(1114, 'isDemoLayout', 'false', 'boolean', 'false', 98, '2021-08-25 15:25:23', '2021-08-26 06:43:42'),
(1115, 'customer', '2', 'object', '{\"name\":\"Quân Trần\",\"value\":2,\"__typename\":\"NameValue\"}', 98, '2021-08-25 15:25:23', '2021-08-25 16:09:25'),
(1116, 'employee', '59', 'object', '{\"name\":\"Khánh Hà\",\"value\":59,\"__typename\":\"NameValue\"}', 98, '2021-08-25 15:45:41', '2021-08-26 06:43:42'),
(1117, 'leader', '41', 'object', '{\"name\":\"Hải My\",\"value\":41,\"__typename\":\"NameValue\"}', 98, '2021-08-25 15:45:41', '2021-08-26 06:43:42'),
(1118, 'cost', '100000', 'number', '100000', 98, '2021-08-25 15:45:41', '2021-08-25 15:45:41'),
(1119, 'link', 'abc avc\nfinsih', 'string', 'abc avc\nfinsih', 99, '2021-08-26 07:15:26', '2021-08-26 07:31:35'),
(1120, 'customer', '2', 'object', '{\"__typename\":\"NameValue\",\"name\":\"Quân Trần\",\"value\":2}', 99, '2021-08-26 07:15:26', '2021-08-26 07:21:45'),
(1121, 'isDemoLayout', 'false', 'boolean', 'false', 99, '2021-08-26 07:15:26', '2021-08-26 07:31:35'),
(1122, 'isDemoColor', 'false', 'boolean', 'false', 99, '2021-08-26 07:15:26', '2021-08-26 07:31:35'),
(1123, 'employee', '59', 'object', '{\"name\":\"Khánh Hà\",\"value\":59,\"__typename\":\"NameValue\"}', 99, '2021-08-26 07:21:37', '2021-08-26 07:31:36'),
(1124, 'leader', '41', 'object', '{\"name\":\"Hải My\",\"value\":41,\"__typename\":\"NameValue\"}', 99, '2021-08-26 07:21:37', '2021-08-26 07:31:36'),
(1125, 'cost', '100000', 'number', '100000', 99, '2021-08-26 07:21:37', '2021-08-26 07:21:45'),
(1126, 'link', 'abc', 'string', 'abc', 100, '2021-08-26 08:51:37', '2021-08-26 13:44:46'),
(1127, 'isDemoColor', 'true', 'boolean', 'true', 100, '2021-08-26 08:51:37', '2021-08-26 13:44:46'),
(1128, 'isDemoLayout', 'false', 'boolean', 'false', 100, '2021-08-26 08:51:37', '2021-08-26 13:44:46'),
(1129, 'customer', '2', 'object', '{\"__typename\":\"NameValue\",\"name\":\"Quân Trần\",\"value\":2}', 100, '2021-08-26 08:51:37', '2021-08-26 08:52:33'),
(1130, 'cost', '100000', 'number', '100000', 100, '2021-08-26 08:52:33', '2021-08-26 08:52:33'),
(1131, 'leader', '41', 'object', '{\"name\":\"Hải My\",\"value\":41,\"__typename\":\"NameValue\"}', 100, '2021-08-26 08:52:33', '2021-08-26 13:44:47'),
(1132, 'employee', '59', 'object', '{\"value\":59,\"name\":\"Khánh Hà\"}', 100, '2021-08-26 08:52:33', '2021-08-26 13:44:47'),
(1133, 'link', 'xx', 'string', 'xx', 101, '2021-08-26 14:08:44', '2021-08-26 14:11:50'),
(1134, 'isDemoColor', 'false', 'boolean', 'false', 101, '2021-08-26 14:08:44', '2021-08-26 14:11:50'),
(1135, 'isDemoLayout', 'false', 'boolean', 'false', 101, '2021-08-26 14:08:44', '2021-08-26 14:11:50'),
(1136, 'customer', '2', 'object', '{\"__typename\":\"NameValue\",\"name\":\"Quân Trần\",\"value\":2}', 101, '2021-08-26 14:08:44', '2021-08-26 14:10:49'),
(1137, 'employee', '59', 'object', '{\"value\":59,\"name\":\"Khánh Hà\"}', 101, '2021-08-26 14:09:35', '2021-08-26 14:11:50'),
(1138, 'leader', '41', 'object', '{\"name\":\"Hải My\",\"value\":41,\"__typename\":\"NameValue\"}', 101, '2021-08-26 14:09:35', '2021-08-26 14:11:50'),
(1139, 'cost', '100000', 'number', '100000', 101, '2021-08-26 14:09:35', '2021-08-26 14:10:49'),
(1147, 'link', 'xx', 'string', 'xx', 103, '2021-08-26 14:59:50', '2021-09-09 17:18:06'),
(1148, 'isDemoColor', 'false', 'boolean', 'false', 103, '2021-08-26 14:59:50', '2021-09-09 17:18:06'),
(1149, 'isDemoLayout', 'false', 'boolean', 'false', 103, '2021-08-26 14:59:50', '2021-09-09 17:18:06'),
(1150, 'customer', '32', 'object', '{\"value\":32,\"name\":\"Tường Vi\"}', 103, '2021-08-26 14:59:50', '2021-09-09 17:18:07'),
(1151, 'employee', '34', 'object', '{\"__typename\":\"NameValue\",\"name\":\"Hoàng \",\"value\":34}', 103, '2021-08-26 15:00:33', '2021-09-09 17:18:07'),
(1152, 'leader', '41', 'object', '{\"__typename\":\"NameValue\",\"name\":\"Hải My\",\"value\":41}', 103, '2021-08-26 15:00:33', '2021-09-09 17:18:07'),
(1153, 'cost', '100000', 'number', '100000', 103, '2021-08-26 15:00:34', '2021-09-09 17:18:07'),
(1162, 'link', 'Link 1: Gốc\nLink 2 dsdsd', 'string', 'Link 1: Gốc\nLink 2 dsdsd', 106, '2021-10-03 13:07:08', '2021-10-03 13:11:33'),
(1163, 'isDemoLayout', 'false', 'boolean', 'false', 106, '2021-10-03 13:07:08', '2021-10-03 13:11:33'),
(1164, 'isDemoColor', 'true', 'boolean', 'true', 106, '2021-10-03 13:07:08', '2021-10-03 13:11:33'),
(1165, 'customer', '2', 'object', '{\"__typename\":\"NameValue\",\"name\":\"Quân Trần\",\"value\":2}', 106, '2021-10-03 13:07:08', '2021-10-03 13:09:27'),
(1166, 'leader', '35', 'object', '{\"name\":\"Thành \",\"value\":35,\"__typename\":\"NameValue\"}', 106, '2021-10-03 13:09:08', '2021-10-03 13:11:33'),
(1167, 'employee', '54', 'object', '{\"value\":54,\"name\":\"Thanh Sang\"}', 106, '2021-10-03 13:09:08', '2021-10-03 13:11:33'),
(1168, 'cost', '100000', 'number', '100000', 106, '2021-10-03 13:09:08', '2021-10-03 13:09:27');

-- --------------------------------------------------------

--
-- Table structure for table `Jobs`
--

CREATE TABLE `Jobs` (
  `id` int(11) NOT NULL,
  `code` varchar(10) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `primaryImageUrl` varchar(255) DEFAULT NULL,
  `visibility` varchar(255) DEFAULT NULL,
  `publishDate` datetime DEFAULT NULL,
  `finishDate` date DEFAULT NULL,
  `dueDate` date NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Jobs`
--

INSERT INTO `Jobs` (`id`, `code`, `title`, `description`, `status`, `primaryImageUrl`, `visibility`, `publishDate`, `finishDate`, `dueDate`, `userId`, `createdAt`, `updatedAt`) VALUES
(98, 'C2J98', 'Job 1', 'Test description 4', 'I', NULL, NULL, '2021-08-26 15:08:55', NULL, '2021-08-28', 2, '2021-08-25 15:25:23', '2021-08-26 07:04:08'),
(99, 'C2J99', 'Job 2', 'kkk', 'F', NULL, NULL, '2021-08-26 07:15:15', NULL, '2021-08-29', 2, '2021-08-26 07:15:25', '2021-08-26 07:31:35'),
(100, 'C2J100', 'Job 3', 'abc', 'F', NULL, NULL, '2021-08-26 08:51:24', NULL, '2021-08-29', 2, '2021-08-26 08:51:37', '2021-08-26 13:56:04'),
(101, 'C2J101', 'Job 4', 'x', 'F', NULL, NULL, '2021-08-26 14:07:52', NULL, '2021-08-29', 2, '2021-08-26 14:08:44', '2021-08-26 14:15:37'),
(103, 'C2J103', 'Job 6', 'xx', 'F', NULL, NULL, '2021-08-26 14:59:31', NULL, '2021-08-29', 2, '2021-08-26 14:59:50', '2021-09-09 17:18:07'),
(105, 'C59J105', 'Ảnh của Trúc', 'đssxx', 'A', NULL, NULL, '2021-10-03 13:03:33', NULL, '2021-10-06', 59, '2021-10-03 13:04:02', '2021-10-03 13:04:02'),
(106, 'C2J106', 'Ảnh của Trúc', 'b', 'I', NULL, NULL, '2021-10-03 13:06:50', NULL, '2021-10-06', 2, '2021-10-03 13:07:08', '2021-10-03 13:11:33');

-- --------------------------------------------------------

--
-- Table structure for table `JobTerms`
--

CREATE TABLE `JobTerms` (
  `id` int(11) NOT NULL,
  `term_taxonomy_id` int(11) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `ref_id` int(11) DEFAULT NULL,
  `version` int(11) NOT NULL,
  `latestVersion` int(11) DEFAULT NULL,
  `status` varchar(1) NOT NULL DEFAULT 'A',
  `assignee_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `JobTerms`
--

INSERT INTO `JobTerms` (`id`, `term_taxonomy_id`, `order`, `ref_id`, `version`, `latestVersion`, `status`, `assignee_id`, `createdAt`, `updatedAt`) VALUES
(549, 13, NULL, 98, 1, 1, 'A', 34, '2021-08-25 15:25:23', '2021-08-25 15:45:41'),
(550, 5, NULL, 98, 1, 1, 'A', 59, '2021-08-25 16:09:25', '2021-08-26 07:02:45'),
(551, 6, NULL, 98, 1, 1, 'A', 59, '2021-08-26 04:52:36', '2021-08-26 07:04:08'),
(552, 7, NULL, 98, 1, 1, 'A', 59, '2021-08-26 04:53:15', '2021-08-26 06:43:02'),
(553, 8, NULL, 98, 1, 1, 'A', 59, '2021-08-26 04:54:27', '2021-08-26 04:54:27'),
(554, 13, NULL, 99, 1, 1, 'A', 34, '2021-08-26 07:15:26', '2021-08-26 07:21:37'),
(555, 5, NULL, 99, 1, 1, 'A', 34, '2021-08-26 07:21:45', '2021-08-26 07:22:04'),
(556, 6, NULL, 99, 1, 1, 'A', 34, '2021-08-26 07:28:38', '2021-08-26 07:28:38'),
(557, 7, NULL, 99, 1, 1, 'A', 59, '2021-08-26 07:28:49', '2021-08-26 07:28:49'),
(558, 8, NULL, 99, 1, 1, 'A', 59, '2021-08-26 07:31:27', '2021-08-26 07:31:27'),
(559, 13, NULL, 100, 1, 1, 'A', NULL, '2021-08-26 08:51:37', '2021-08-26 08:51:37'),
(560, 5, NULL, 100, 1, 1, 'A', 34, '2021-08-26 08:52:33', '2021-08-26 13:44:10'),
(561, 6, NULL, 100, 1, 1, 'A', 34, '2021-08-26 08:56:18', '2021-08-26 08:56:18'),
(562, 7, NULL, 100, 1, 1, 'A', 59, '2021-08-26 13:44:33', '2021-08-26 13:44:33'),
(563, 8, NULL, 100, 1, 1, 'A', 59, '2021-08-26 13:56:04', '2021-08-26 13:56:04'),
(564, 13, NULL, 101, 1, 1, 'A', NULL, '2021-08-26 14:08:44', '2021-08-26 14:08:44'),
(565, 5, NULL, 101, 1, 1, 'A', 34, '2021-08-26 14:09:35', '2021-08-26 14:10:49'),
(566, 6, NULL, 101, 1, 1, 'A', 34, '2021-08-26 14:11:36', '2021-08-26 14:11:36'),
(567, 7, NULL, 101, 1, 1, 'A', 59, '2021-08-26 14:11:42', '2021-08-26 14:11:42'),
(568, 8, NULL, 101, 1, 1, 'A', 59, '2021-08-26 14:15:37', '2021-08-26 14:15:37'),
(574, 13, NULL, 103, 1, 1, 'A', NULL, '2021-08-26 14:59:50', '2021-08-26 14:59:50'),
(575, 5, NULL, 103, 1, 1, 'A', 59, '2021-08-26 15:00:33', '2021-08-26 15:00:33'),
(576, 6, NULL, 103, 1, 1, 'A', 59, '2021-08-26 15:01:17', '2021-08-26 15:01:17'),
(577, 7, NULL, 103, 1, 1, 'A', 34, '2021-08-26 15:01:55', '2021-08-26 15:01:55'),
(578, 8, NULL, 103, 1, 1, 'A', 34, '2021-08-26 15:02:55', '2021-09-09 17:18:07'),
(581, 13, NULL, 106, 1, 1, 'A', 59, '2021-10-03 13:07:08', '2021-10-03 13:09:08'),
(582, 5, NULL, 106, 1, 1, 'A', 59, '2021-10-03 13:09:27', '2021-10-03 13:09:27'),
(583, 6, NULL, 106, 1, 1, 'A', 54, '2021-10-03 13:10:31', '2021-10-03 13:10:31');

-- --------------------------------------------------------

--
-- Table structure for table `Options`
--

CREATE TABLE `Options` (
  `id` int(11) NOT NULL,
  `key` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `data` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Options`
--

INSERT INTO `Options` (`id`, `key`, `type`, `value`, `data`, `createdAt`, `updatedAt`) VALUES
(17, 'kpi_leader_money', 'number', '15000000', '15000000', '2021-09-10 15:41:56', '2021-09-11 05:12:27'),
(18, 'kpi_leader_percent', 'number', '5', '5', '2021-09-11 05:11:33', '2021-09-11 05:12:27'),
(19, 'kpi_employee_money', 'number', '10000000', '10000000', '2021-09-11 05:12:27', '2021-09-11 05:12:27'),
(20, 'kpi_employee_percent', 'number', '3', '3', '2021-09-11 05:12:27', '2021-09-11 05:12:27'),
(21, 'salary_retoucher', 'number', '111', '111', '2021-09-12 09:59:45', '2021-09-12 09:59:45'),
(22, 'salary_leader', 'number', '333', '333', '2021-09-12 09:59:45', '2021-09-12 09:59:45'),
(23, 'salary_blender', 'number', '222', '222', '2021-09-12 09:59:45', '2021-09-12 09:59:45'),
(24, 'price_single', 'number', '1444', '1444', '2021-09-12 10:00:11', '2021-09-12 10:00:11'),
(25, 'price_zoom', 'number', '5555', '5555', '2021-09-12 10:00:11', '2021-09-12 10:00:11');

-- --------------------------------------------------------

--
-- Table structure for table `Permissions`
--

CREATE TABLE `Permissions` (
  `id` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `refId` int(11) DEFAULT NULL,
  `featureName` varchar(255) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Permissions`
--

INSERT INTO `Permissions` (`id`, `type`, `refId`, `featureName`, `code`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'groups', 1, 'User', 15, 'A', '2021-05-16 17:51:58', '2021-07-05 14:52:32'),
(2, 'groups', 1, 'Authorized', 15, 'A', '2021-05-16 17:51:58', '2021-06-01 14:35:07'),
(3, 'groups', 1, 'Customer', 15, 'A', '2021-05-16 17:51:58', '2021-05-17 17:12:36'),
(4, 'groups', 1, 'Job', 15, 'A', '2021-05-16 17:51:58', '2021-05-17 16:52:42'),
(5, 'groups', 1, 'Settings', 15, 'A', '2021-05-16 17:51:58', '2021-05-17 16:42:39');

-- --------------------------------------------------------

--
-- Table structure for table `ProductBaseImages`
--

CREATE TABLE `ProductBaseImages` (
  `id` int(11) NOT NULL,
  `productBaseId` int(11) DEFAULT NULL,
  `imageId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ProductBases`
--

CREATE TABLE `ProductBases` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `primaryImageUrl` varchar(255) DEFAULT NULL,
  `visibility` varchar(255) DEFAULT NULL,
  `publishDate` datetime DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `providerId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ProductBaseTags`
--

CREATE TABLE `ProductBaseTags` (
  `id` int(11) NOT NULL,
  `productBaseId` int(11) DEFAULT NULL,
  `tagId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ProductBaseTerms`
--

CREATE TABLE `ProductBaseTerms` (
  `id` int(11) NOT NULL,
  `term_taxonomy_id` int(11) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `ref_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Providers`
--

CREATE TABLE `Providers` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Roles`
--

CREATE TABLE `Roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Roles`
--

INSERT INTO `Roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'System Admin', '2021-04-16 09:35:10', '2021-04-16 09:35:10'),
(2, 'HelpDesk', '2021-04-16 09:35:10', '2021-04-16 09:35:10'),
(3, 'Leader', '2021-04-16 09:35:10', '2021-04-16 09:35:10'),
(4, 'Employee', '2021-04-16 09:35:10', '2021-04-16 09:35:10'),
(5, 'Customer', '2021-04-16 09:35:10', '2021-04-16 09:35:10');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `expires` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `session_token` varchar(255) NOT NULL,
  `access_token` varchar(255) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Tags`
--

CREATE TABLE `Tags` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `productBaseId` int(11) DEFAULT NULL,
  `productBaseTagId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `TermMeta`
--

CREATE TABLE `TermMeta` (
  `id` int(11) NOT NULL,
  `key` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `term_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Terms`
--

CREATE TABLE `Terms` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `term_group` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Terms`
--

INSERT INTO `Terms` (`id`, `name`, `slug`, `term_group`, `status`) VALUES
(1, 'Link', 'link', NULL, 'A'),
(2, 'Urgent', 'urgent', NULL, 'A'),
(3, 'High', 'high', NULL, 'A'),
(4, 'Normal', 'normal', NULL, 'A'),
(5, 'Low', 'low', NULL, 'A'),
(6, 'Cần làm', 'todo', NULL, 'A'),
(7, 'Chấm sửa', 'cham-sua', NULL, 'A'),
(8, 'Blend mầu', 'blend-mau', NULL, 'A'),
(9, 'Hoàn thiện', 'hoan-thien', NULL, 'A'),
(10, 'Nạp tiền', 'nap-tien', NULL, 'A'),
(11, 'Rút tiền', 'rut-tien', NULL, 'A'),
(12, 'Nhận tiền', 'nhan-tien', NULL, 'A'),
(13, 'Tạm giữ', 'tam-giu', NULL, 'A'),
(14, 'Mới tạo', 'moi-tao', NULL, 'A');

-- --------------------------------------------------------

--
-- Table structure for table `TermTaxonomies`
--

CREATE TABLE `TermTaxonomies` (
  `id` int(11) NOT NULL,
  `taxonomy` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `parent` int(11) DEFAULT NULL,
  `order` int(11) NOT NULL,
  `count` int(11) DEFAULT NULL,
  `term_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `TermTaxonomies`
--

INSERT INTO `TermTaxonomies` (`id`, `taxonomy`, `description`, `slug`, `parent`, `order`, `count`, `term_id`) VALUES
(1, 'job_priority', NULL, 'job_priority', NULL, 0, NULL, 5),
(2, 'job_priority', NULL, 'job_priority', NULL, 0, NULL, 2),
(3, 'job_priority', NULL, 'job_priority', NULL, 0, NULL, 3),
(4, 'job_priority', NULL, 'job_priority', NULL, 0, NULL, 4),
(5, 'job_status', NULL, 'job_status', NULL, 1, NULL, 6),
(6, 'job_status', NULL, 'job_status', NULL, 2, NULL, 7),
(7, 'job_status', NULL, 'job_status', NULL, 3, NULL, 8),
(8, 'job_status', NULL, 'job_status', NULL, 4, NULL, 9),
(9, 'account_deposit', NULL, 'account_deposit', NULL, 4, NULL, 10),
(10, 'account_withdraw', NULL, 'account_withdraw', NULL, 4, NULL, 11),
(11, 'account_earning', NULL, 'account_earning', NULL, 4, NULL, 12),
(12, 'account_holding', NULL, 'account_holding', NULL, 4, NULL, 13),
(13, 'job_status', NULL, 'job_status', NULL, 0, NULL, 14),
(14, 'account_pay', NULL, 'account_pay', NULL, 4, NULL, 13);

-- --------------------------------------------------------

--
-- Table structure for table `UserMeta`
--

CREATE TABLE `UserMeta` (
  `id` int(11) NOT NULL,
  `key` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `data` text NOT NULL,
  `type` varchar(10) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `UserMeta`
--

INSERT INTO `UserMeta` (`id`, `key`, `value`, `status`, `user_id`, `data`, `type`, `createdAt`, `updatedAt`) VALUES
(23, 'customerType', '1', NULL, 32, '', '', '2021-04-20 05:32:40', '2021-04-20 05:32:40'),
(24, 'address', 'a', NULL, 32, '', '', '2021-04-20 05:32:40', '2021-04-20 05:32:40'),
(25, 'phone', '1', NULL, 32, '', '', '2021-04-20 05:32:40', '2021-04-20 05:32:40'),
(26, 'customerType', '1', NULL, 32, '', '', '2021-04-20 05:33:32', '2021-04-20 05:33:32'),
(27, 'address', 'a', NULL, 32, '', '', '2021-04-20 05:33:32', '2021-04-20 05:33:32'),
(28, 'phone', '1', NULL, 32, '', '', '2021-04-20 05:33:32', '2021-04-20 05:33:32'),
(29, 'customerType', '1', NULL, 32, '', '', '2021-04-20 05:35:13', '2021-04-20 05:35:13'),
(30, 'address', 'a', NULL, 32, '', '', '2021-04-20 05:35:13', '2021-04-20 05:35:13'),
(31, 'phone', '1', NULL, 32, '', '', '2021-04-20 05:35:13', '2021-04-20 05:35:13'),
(32, 'customerType', '1', NULL, 32, '', '', '2021-04-20 05:41:09', '2021-04-20 05:41:09'),
(33, 'address', 'a', NULL, 32, '', '', '2021-04-20 05:41:09', '2021-04-20 05:41:09'),
(34, 'phone', '1', NULL, 32, '', '', '2021-04-20 05:41:09', '2021-04-20 05:41:09'),
(35, 'customerType', '2', NULL, 32, '', '', '2021-04-20 07:14:20', '2021-04-20 07:14:20'),
(36, 'address', 'a', NULL, 32, '', '', '2021-04-20 07:14:20', '2021-04-20 07:14:20'),
(37, 'phone', '1', NULL, 32, '', '', '2021-04-20 07:14:20', '2021-04-20 07:14:20'),
(52, 'account_money', '1100000', 'A', 34, '1100000', 'number', '2021-07-05 14:53:01', '2021-09-09 17:18:07'),
(53, 'account_money', '1090000', 'A', 41, '1090000', 'number', '2021-07-05 14:53:15', '2021-09-09 17:18:07'),
(55, 'account_money', '1000000', 'A', 54, '1000000', 'number', '2021-08-03 15:23:28', '2021-08-22 02:55:37'),
(57, 'account_money', '1000000', 'A', 1, '1000000', 'number', '2021-08-16 12:06:48', '2021-08-16 12:06:48'),
(58, 'account_money', '1110000', 'A', 59, '1110000', 'number', '2021-08-16 12:07:03', '2021-09-09 17:18:07'),
(61, 'account_money', '700000', 'A', 2, '700000', 'number', '2021-08-16 12:39:34', '2021-09-09 17:18:07');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `email_verified` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`, `image`, `status`, `role_id`, `email_verified`, `created_at`, `updated_at`) VALUES
(1, 'Nghiem Tran', '$2b$10$QRdi.FleYan/H/X5aSnhrupIYJ0EpjtYQAg84EA7SyzgXMbtu8DFO', 'wooowebsite@gmail.com', 'ESBwdXnW2-173900417_4520874411274729_8138499218836766093_n.jpg', 'A', 1, NULL, '2021-04-18 16:35:42', '2021-04-18 16:35:42'),
(2, 'Quân Trần', '$2b$10$QRdi.FleYan/H/X5aSnhrupIYJ0EpjtYQAg84EA7SyzgXMbtu8DFO', 'quanretoucher@gmail.com', NULL, 'A', 5, NULL, '2021-04-18 16:35:42', '2021-04-18 16:35:42'),
(32, 'Tường Vi', NULL, 'kh1@gmail.com', NULL, 'A', 5, NULL, '2021-04-19 15:02:08', '2021-04-19 15:02:08'),
(33, 'Hùng', NULL, 'hung@gmail.com', NULL, 'A', 3, NULL, '2021-04-19 15:07:12', '2021-04-19 15:07:12'),
(34, 'Hoàng ', '$2b$10$QRdi.FleYan/H/X5aSnhrupIYJ0EpjtYQAg84EA7SyzgXMbtu8DFO', 'chieudong4712@gmail.com', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4520310414664462&height=50&width=50&ext=1621437363&hash=AeRKH4nZIXJLUKu3ZUc', 'A', 4, NULL, '2021-04-19 15:16:04', '2021-04-19 15:16:04'),
(35, 'Thành ', NULL, 'thanh@gmail.com', NULL, 'A', 3, NULL, '2021-04-19 15:18:31', '2021-04-19 15:18:31'),
(41, 'Hải My', '$2b$10$QRdi.FleYan/H/X5aSnhrupIYJ0EpjtYQAg84EA7SyzgXMbtu8DFO', 'haimy@gmail.com', NULL, 'A', 3, NULL, '2021-04-30 06:33:21', '2021-04-30 06:33:21'),
(54, 'Thanh Sang', '$2b$10$QRdi.FleYan/H/X5aSnhrupIYJ0EpjtYQAg84EA7SyzgXMbtu8DFO', 'thanhsang@gmail.com', NULL, 'A', 4, NULL, '2021-05-01 06:28:53', '2021-05-01 06:28:53'),
(59, 'Khánh Hà', '$2b$10$QRdi.FleYan/H/X5aSnhrupIYJ0EpjtYQAg84EA7SyzgXMbtu8DFO', 'kh@gmail.com', 'IioNWILjo-228459540_4325289570898988_4696069351306560630_n.jpg', 'A', 4, NULL, '2021-05-01 06:37:54', '2021-05-01 06:37:54');

-- --------------------------------------------------------

--
-- Table structure for table `UserTerms`
--

CREATE TABLE `UserTerms` (
  `id` int(11) NOT NULL,
  `term_taxonomy_id` int(11) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `latestVersion` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `version` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `UserTerms`
--

INSERT INTO `UserTerms` (`id`, `term_taxonomy_id`, `order`, `money`, `status`, `latestVersion`, `user_id`, `createdAt`, `updatedAt`, `version`) VALUES
(6, 10, NULL, 1000, NULL, NULL, 1, '2021-05-29 18:16:58', '2021-05-29 18:16:58', 0),
(7, 10, NULL, 1000, NULL, NULL, 1, '2021-05-29 18:16:58', '2021-05-29 18:16:58', 0),
(11, 9, NULL, 2000, 'A', NULL, 1, '2021-05-30 06:17:35', '2021-05-30 06:17:35', 0),
(12, 9, NULL, 3000, 'A', NULL, 1, '2021-05-30 14:48:54', '2021-05-30 14:48:54', 0),
(13, 9, NULL, 0, 'A', NULL, 1, '2021-05-30 14:56:39', '2021-05-30 14:56:39', 0),
(14, 9, NULL, 0, 'A', NULL, 1, '2021-05-30 15:05:57', '2021-05-30 15:05:57', 0),
(15, 9, NULL, 0, 'A', NULL, 1, '2021-05-30 15:13:37', '2021-05-30 15:13:37', 0),
(16, 9, NULL, 0, 'A', NULL, 1, '2021-05-30 15:14:10', '2021-05-30 15:14:10', 0),
(17, 9, NULL, 3100, 'A', NULL, 1, '2021-05-30 15:24:16', '2021-05-30 15:24:16', 0),
(18, 9, NULL, 1234, 'A', NULL, 1, '2021-05-30 15:34:01', '2021-05-30 15:34:01', 0),
(19, 9, NULL, 2000, 'A', NULL, 1, '2021-05-30 15:35:06', '2021-05-30 15:35:06', 0),
(20, 9, NULL, 1000, 'A', NULL, 1, '2021-05-30 15:48:48', '2021-05-30 15:48:48', 0),
(21, 9, NULL, 10000, 'A', NULL, 1, '2021-05-30 16:22:38', '2021-05-30 16:22:38', 0),
(22, 9, NULL, 866, 'A', NULL, 1, '2021-05-30 16:23:20', '2021-05-30 16:23:20', 0),
(23, 9, NULL, 900, 'A', NULL, 1, '2021-05-30 16:24:15', '2021-05-30 16:24:15', 0),
(24, 9, NULL, 1000, 'A', NULL, 1, '2021-05-30 16:25:36', '2021-05-30 16:25:36', 0),
(25, 9, NULL, 1000, 'A', NULL, 1, '2021-05-31 12:50:04', '2021-05-31 12:50:04', 0),
(26, 9, NULL, 1000, 'A', NULL, 1, '2021-05-31 13:00:02', '2021-05-31 13:00:02', 0),
(27, 9, NULL, 1000, 'A', NULL, 1, '2021-05-31 13:04:17', '2021-05-31 13:04:17', 0),
(28, 9, NULL, 1000, 'A', NULL, 1, '2021-05-31 13:05:19', '2021-05-31 13:05:19', 0),
(29, 9, NULL, 1000, 'A', NULL, 1, '2021-05-31 13:05:49', '2021-05-31 13:05:49', 0),
(30, 9, NULL, 100000, 'A', NULL, 2, '2021-07-04 14:10:14', '2021-07-04 14:10:14', 0),
(31, 9, NULL, 1000000, 'A', NULL, 34, '2021-07-05 14:01:17', '2021-07-05 14:01:17', 0),
(32, 9, NULL, 200000, 'A', NULL, 1, '2021-07-05 14:04:00', '2021-07-05 14:04:00', 0),
(33, 9, NULL, 1000000, 'A', NULL, 2, '2021-07-05 14:04:25', '2021-07-05 14:04:25', 0),
(34, 9, NULL, 1200000, 'A', NULL, 34, '2021-07-05 14:53:01', '2021-07-05 14:53:01', 0),
(35, 9, NULL, 200000, 'A', NULL, 41, '2021-07-05 14:53:15', '2021-07-05 14:53:15', 0),
(46, 14, NULL, -100000, 'A', NULL, 2, '2021-08-03 15:23:28', '2021-08-03 15:23:28', 0),
(47, 11, NULL, 30000, 'A', NULL, 59, '2021-08-03 15:23:28', '2021-08-03 15:23:28', 0),
(48, 11, NULL, 40000, 'A', NULL, 59, '2021-08-03 15:23:28', '2021-08-03 15:23:28', 0),
(49, 11, NULL, 30000, 'A', NULL, 54, '2021-08-03 15:23:28', '2021-08-03 15:23:28', 0),
(50, 14, NULL, -100000, 'A', NULL, 2, '2021-08-03 15:35:29', '2021-08-03 15:35:29', 0),
(51, 11, NULL, 30000, 'A', NULL, 59, '2021-08-03 15:35:29', '2021-08-03 15:35:29', 0),
(52, 11, NULL, 40000, 'A', NULL, 59, '2021-08-03 15:35:29', '2021-08-03 15:35:29', 0),
(53, 11, NULL, 30000, 'A', NULL, 54, '2021-08-03 15:35:29', '2021-08-03 15:35:29', 0),
(54, 11, NULL, 30000, 'A', NULL, 59, '2021-08-03 15:40:46', '2021-08-03 15:40:46', 0),
(55, 11, NULL, 30000, 'A', NULL, 54, '2021-08-03 15:40:46', '2021-08-03 15:40:46', 0),
(56, 11, NULL, 40000, 'A', NULL, 59, '2021-08-03 15:40:46', '2021-08-03 15:40:46', 0),
(57, 14, NULL, -100000, 'A', NULL, 2, '2021-08-03 15:40:46', '2021-08-03 15:40:46', 0),
(58, 14, NULL, -100000, 'A', NULL, 2, '2021-08-04 03:08:43', '2021-08-04 03:08:43', 0),
(59, 11, NULL, 30000, 'A', NULL, 59, '2021-08-04 03:08:43', '2021-08-04 03:08:43', 0),
(60, 11, NULL, 40000, 'A', NULL, 59, '2021-08-04 03:08:43', '2021-08-04 03:08:43', 0),
(61, 11, NULL, 30000, 'A', NULL, 54, '2021-08-04 03:08:43', '2021-08-04 03:08:43', 0),
(62, 14, NULL, -100000, 'A', NULL, 2, '2021-08-04 03:35:12', '2021-08-04 03:35:12', 0),
(63, 11, NULL, 30000, 'A', NULL, 59, '2021-08-04 03:35:12', '2021-08-04 03:35:12', 0),
(64, 11, NULL, 30000, 'A', NULL, 54, '2021-08-04 03:35:12', '2021-08-04 03:35:12', 0),
(65, 11, NULL, 40000, 'A', NULL, 59, '2021-08-04 03:35:12', '2021-08-04 03:35:12', 0),
(66, 14, NULL, -100000, 'A', NULL, 2, '2021-08-04 04:08:02', '2021-08-04 04:08:02', 0),
(67, 11, NULL, 30000, 'A', NULL, 59, '2021-08-04 04:08:02', '2021-08-04 04:08:02', 0),
(68, 11, NULL, 40000, 'A', NULL, 59, '2021-08-04 04:08:02', '2021-08-04 04:08:02', 0),
(69, 11, NULL, 30000, 'A', NULL, 54, '2021-08-04 04:08:02', '2021-08-04 04:08:02', 0),
(70, 14, NULL, -100000, 'A', NULL, 2, '2021-08-04 04:08:45', '2021-08-04 04:08:45', 0),
(71, 11, NULL, 30000, 'A', NULL, 59, '2021-08-04 04:08:45', '2021-08-04 04:08:45', 0),
(72, 11, NULL, 40000, 'A', NULL, 59, '2021-08-04 04:08:45', '2021-08-04 04:08:45', 0),
(73, 11, NULL, 30000, 'A', NULL, 54, '2021-08-04 04:08:45', '2021-08-04 04:08:45', 0),
(74, 9, NULL, 300000, 'A', NULL, 34, '2021-08-04 09:46:29', '2021-08-04 09:46:29', 0),
(75, 14, NULL, -100000, 'A', NULL, 2, '2021-08-04 15:26:51', '2021-08-04 15:26:51', 0),
(76, 11, NULL, 30000, 'A', NULL, 34, '2021-08-04 15:26:51', '2021-08-04 15:26:51', 0),
(77, 11, NULL, 40000, 'A', NULL, 34, '2021-08-04 15:26:51', '2021-08-04 15:26:51', 0),
(78, 11, NULL, 30000, 'A', NULL, 54, '2021-08-04 15:26:51', '2021-08-04 15:26:51', 0),
(79, 14, NULL, -400000, 'A', NULL, 2, '2021-08-05 09:56:55', '2021-08-05 09:56:55', 0),
(80, 11, NULL, 120000, 'A', NULL, 34, '2021-08-05 09:56:55', '2021-08-05 09:56:55', 0),
(81, 11, NULL, 160000, 'A', NULL, 34, '2021-08-05 09:56:55', '2021-08-05 09:56:55', 0),
(82, 11, NULL, 120000, 'A', NULL, 54, '2021-08-05 09:56:55', '2021-08-05 09:56:55', 0),
(83, 14, NULL, -1000000, 'A', NULL, 1, '2021-08-14 05:00:24', '2021-08-14 05:00:24', 0),
(84, 11, NULL, 300000, 'A', NULL, 34, '2021-08-14 05:00:24', '2021-08-14 05:00:24', 0),
(85, 11, NULL, 400000, 'A', NULL, 34, '2021-08-14 05:00:24', '2021-08-14 05:00:24', 0),
(86, 11, NULL, 300000, 'A', NULL, 54, '2021-08-14 05:00:24', '2021-08-14 05:00:24', 0),
(87, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-14 05:27:27', '2021-08-14 05:27:27', 0),
(88, 11, NULL, 330000, 'A', NULL, 34, '2021-08-14 05:27:27', '2021-08-14 05:27:27', 0),
(89, 11, NULL, 440000, 'A', NULL, 34, '2021-08-14 05:27:27', '2021-08-14 05:27:27', 0),
(90, 11, NULL, 330000, 'A', NULL, 54, '2021-08-14 05:27:27', '2021-08-14 05:27:27', 0),
(91, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-14 09:14:12', '2021-08-14 09:14:12', 0),
(92, 11, NULL, 330000, 'A', NULL, 59, '2021-08-14 09:14:12', '2021-08-14 09:14:12', 0),
(93, 11, NULL, 440000, 'A', NULL, 59, '2021-08-14 09:14:12', '2021-08-14 09:14:12', 0),
(94, 11, NULL, 330000, 'A', NULL, 54, '2021-08-14 09:14:12', '2021-08-14 09:14:12', 0),
(95, 9, NULL, 1000000, 'A', NULL, 1, '2021-08-16 12:06:48', '2021-08-16 12:06:48', 0),
(96, 9, NULL, 1000000, 'A', NULL, 59, '2021-08-16 12:07:03', '2021-08-16 12:07:03', 0),
(97, 9, NULL, 1000000, 'A', NULL, 2, '2021-08-16 12:08:22', '2021-08-16 12:08:22', 0),
(98, 9, NULL, 1000000, 'A', NULL, 2, '2021-08-16 12:33:36', '2021-08-16 12:33:36', 0),
(99, 9, NULL, 1000000, 'A', NULL, 2, '2021-08-16 12:39:34', '2021-08-16 12:39:34', 0),
(100, 9, NULL, 1000000, 'A', NULL, 2, '2021-08-16 12:57:57', '2021-08-16 12:57:57', 0),
(101, 14, NULL, -800000, 'A', NULL, 2, '2021-08-17 04:45:40', '2021-08-17 04:45:40', 0),
(102, 11, NULL, 240000, 'A', NULL, 34, '2021-08-17 04:45:40', '2021-08-17 04:45:40', 0),
(103, 11, NULL, 320000, 'A', NULL, 34, '2021-08-17 04:45:40', '2021-08-17 04:45:40', 0),
(104, 11, NULL, 240000, 'A', NULL, 54, '2021-08-17 04:45:40', '2021-08-17 04:45:40', 0),
(105, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-21 10:11:41', '2021-08-21 10:11:41', 0),
(106, 11, NULL, 330000, 'A', NULL, 34, '2021-08-21 10:11:41', '2021-08-21 10:11:41', 0),
(107, 11, NULL, 440000, 'A', NULL, 34, '2021-08-21 10:11:41', '2021-08-21 10:11:41', 0),
(108, 11, NULL, 330000, 'A', NULL, 54, '2021-08-21 10:11:41', '2021-08-21 10:11:41', 0),
(109, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-22 02:55:37', '2021-08-22 02:55:37', 0),
(110, 11, NULL, 330000, 'A', NULL, 34, '2021-08-22 02:55:37', '2021-08-22 02:55:37', 0),
(111, 11, NULL, 440000, 'A', NULL, 34, '2021-08-22 02:55:37', '2021-08-22 02:55:37', 0),
(112, 11, NULL, 330000, 'A', NULL, 54, '2021-08-22 02:55:37', '2021-08-22 02:55:37', 0),
(113, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-22 15:46:22', '2021-08-22 15:46:22', 0),
(114, 11, NULL, 330000, 'A', NULL, 34, '2021-08-22 15:46:22', '2021-08-22 15:46:22', 0),
(115, 11, NULL, 440000, 'A', NULL, 34, '2021-08-22 15:46:22', '2021-08-22 15:46:22', 0),
(116, 11, NULL, 330000, 'A', NULL, 41, '2021-08-22 15:46:22', '2021-08-22 15:46:22', 0),
(117, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-22 15:47:34', '2021-08-22 15:47:34', 0),
(118, 11, NULL, 330000, 'A', NULL, 34, '2021-08-22 15:47:35', '2021-08-22 15:47:35', 0),
(119, 11, NULL, 440000, 'A', NULL, 34, '2021-08-22 15:47:35', '2021-08-22 15:47:35', 0),
(120, 11, NULL, 330000, 'A', NULL, 41, '2021-08-22 15:47:35', '2021-08-22 15:47:35', 0),
(121, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 14:48:43', '2021-08-23 14:48:43', 0),
(122, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 14:48:43', '2021-08-23 14:48:43', 0),
(123, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 14:48:43', '2021-08-23 14:48:43', 0),
(124, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 14:48:43', '2021-08-23 14:48:43', 0),
(125, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 15:28:33', '2021-08-23 15:28:33', 0),
(126, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 15:28:33', '2021-08-23 15:28:33', 0),
(127, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 15:28:33', '2021-08-23 15:28:33', 0),
(128, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 15:28:33', '2021-08-23 15:28:33', 0),
(129, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 15:31:06', '2021-08-23 15:31:06', 0),
(130, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 15:31:06', '2021-08-23 15:31:06', 0),
(131, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 15:31:06', '2021-08-23 15:31:06', 0),
(132, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 15:31:06', '2021-08-23 15:31:06', 0),
(133, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 15:47:23', '2021-08-23 15:47:23', 0),
(134, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 15:47:23', '2021-08-23 15:47:23', 0),
(135, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 15:47:23', '2021-08-23 15:47:23', 0),
(136, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 15:47:23', '2021-08-23 15:47:23', 0),
(137, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 15:56:20', '2021-08-23 15:56:20', 0),
(138, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 15:56:20', '2021-08-23 15:56:20', 0),
(139, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 15:56:20', '2021-08-23 15:56:20', 0),
(140, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 15:56:20', '2021-08-23 15:56:20', 0),
(141, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 15:57:06', '2021-08-23 15:57:06', 0),
(142, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 15:57:06', '2021-08-23 15:57:06', 0),
(143, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 15:57:06', '2021-08-23 15:57:06', 0),
(144, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 15:57:06', '2021-08-23 15:57:06', 0),
(145, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 15:57:42', '2021-08-23 15:57:42', 0),
(146, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 15:57:42', '2021-08-23 15:57:42', 0),
(147, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 15:57:42', '2021-08-23 15:57:42', 0),
(148, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 15:57:42', '2021-08-23 15:57:42', 0),
(149, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 16:01:04', '2021-08-23 16:01:04', 0),
(150, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 16:01:04', '2021-08-23 16:01:04', 0),
(151, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 16:01:04', '2021-08-23 16:01:04', 0),
(152, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 16:01:04', '2021-08-23 16:01:04', 0),
(153, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 16:07:39', '2021-08-23 16:07:39', 0),
(154, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 16:07:39', '2021-08-23 16:07:39', 0),
(155, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 16:07:39', '2021-08-23 16:07:39', 0),
(156, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 16:07:39', '2021-08-23 16:07:39', 0),
(157, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 16:08:18', '2021-08-23 16:08:18', 0),
(158, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 16:08:18', '2021-08-23 16:08:18', 0),
(159, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 16:08:18', '2021-08-23 16:08:18', 0),
(160, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 16:08:18', '2021-08-23 16:08:18', 0),
(161, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 16:16:45', '2021-08-23 16:16:45', 0),
(162, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 16:16:45', '2021-08-23 16:16:45', 0),
(163, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 16:16:45', '2021-08-23 16:16:45', 0),
(164, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 16:16:45', '2021-08-23 16:16:45', 0),
(165, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 16:17:06', '2021-08-23 16:17:06', 0),
(166, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 16:17:07', '2021-08-23 16:17:07', 0),
(167, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 16:17:07', '2021-08-23 16:17:07', 0),
(168, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 16:17:07', '2021-08-23 16:17:07', 0),
(169, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 16:18:21', '2021-08-23 16:18:21', 0),
(170, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 16:18:21', '2021-08-23 16:18:21', 0),
(171, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 16:18:21', '2021-08-23 16:18:21', 0),
(172, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 16:18:21', '2021-08-23 16:18:21', 0),
(173, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 16:19:15', '2021-08-23 16:19:15', 0),
(174, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 16:19:15', '2021-08-23 16:19:15', 0),
(175, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 16:19:15', '2021-08-23 16:19:15', 0),
(176, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 16:19:15', '2021-08-23 16:19:15', 0),
(177, 14, NULL, -1100000, 'A', NULL, 2, '2021-08-23 17:17:07', '2021-08-23 17:17:07', 0),
(178, 11, NULL, 330000, 'A', NULL, 34, '2021-08-23 17:17:07', '2021-08-23 17:17:07', 0),
(179, 11, NULL, 440000, 'A', NULL, 34, '2021-08-23 17:17:07', '2021-08-23 17:17:07', 0),
(180, 11, NULL, 330000, 'A', NULL, 41, '2021-08-23 17:17:07', '2021-08-23 17:17:07', 0),
(181, 14, NULL, -100000, 'A', NULL, 2, '2021-08-26 04:54:27', '2021-08-26 04:54:27', 0),
(182, 11, NULL, 30000, 'A', NULL, 59, '2021-08-26 04:54:27', '2021-08-26 04:54:27', 0),
(183, 11, NULL, 40000, 'A', NULL, 59, '2021-08-26 04:54:27', '2021-08-26 04:54:27', 0),
(184, 11, NULL, 30000, 'A', NULL, 41, '2021-08-26 04:54:28', '2021-08-26 04:54:28', 0),
(185, 14, NULL, -100000, 'A', NULL, 2, '2021-08-26 07:31:27', '2021-08-26 07:31:27', 0),
(186, 11, NULL, 30000, 'A', NULL, 59, '2021-08-26 07:31:27', '2021-08-26 07:31:27', 0),
(187, 11, NULL, 40000, 'A', NULL, 59, '2021-08-26 07:31:27', '2021-08-26 07:31:27', 0),
(188, 11, NULL, 30000, 'A', NULL, 41, '2021-08-26 07:31:27', '2021-08-26 07:31:27', 0),
(189, 14, NULL, -100000, 'A', NULL, 2, '2021-08-26 13:56:04', '2021-08-26 13:56:04', 0),
(190, 11, NULL, 30000, 'A', NULL, 59, '2021-08-26 13:56:04', '2021-08-26 13:56:04', 0),
(191, 11, NULL, 40000, 'A', NULL, 34, '2021-08-26 13:56:04', '2021-08-26 13:56:04', 0),
(192, 11, NULL, 30000, 'A', NULL, 41, '2021-08-26 13:56:04', '2021-08-26 13:56:04', 0),
(193, 14, NULL, -100000, 'A', NULL, 2, '2021-08-26 14:15:37', '2021-08-26 14:15:37', 0),
(194, 11, NULL, 30000, 'A', NULL, 59, '2021-08-26 14:15:37', '2021-08-26 14:15:37', 0),
(195, 11, NULL, 40000, 'A', NULL, 34, '2021-08-26 14:15:37', '2021-08-26 14:15:37', 0),
(196, 11, NULL, 30000, 'A', NULL, 41, '2021-08-26 14:15:37', '2021-08-26 14:15:37', 0),
(197, 14, NULL, -100000, 'A', NULL, 2, '2021-08-26 14:21:59', '2021-08-26 14:21:59', 0),
(198, 11, NULL, 30000, 'A', NULL, 59, '2021-08-26 14:21:59', '2021-08-26 14:21:59', 0),
(199, 11, NULL, 40000, 'A', NULL, 34, '2021-08-26 14:21:59', '2021-08-26 14:21:59', 0),
(200, 11, NULL, 30000, 'A', NULL, 41, '2021-08-26 14:21:59', '2021-08-26 14:21:59', 0),
(201, 14, NULL, -100000, 'A', NULL, 2, '2021-08-26 15:02:55', '2021-08-26 15:02:55', 0),
(202, 11, NULL, 30000, 'A', NULL, 34, '2021-08-26 15:02:55', '2021-08-26 15:02:55', 0),
(203, 11, NULL, 40000, 'A', NULL, 59, '2021-08-26 15:02:55', '2021-08-26 15:02:55', 0),
(204, 11, NULL, 30000, 'A', NULL, 41, '2021-08-26 15:02:55', '2021-08-26 15:02:55', 0),
(205, 14, NULL, -100000, 'A', NULL, 2, '2021-09-09 17:18:07', '2021-09-09 17:18:07', 0),
(206, 11, NULL, 30000, 'A', NULL, 34, '2021-09-09 17:18:07', '2021-09-09 17:18:07', 0),
(207, 11, NULL, 40000, 'A', NULL, 59, '2021-09-09 17:18:07', '2021-09-09 17:18:07', 0),
(208, 11, NULL, 30000, 'A', NULL, 41, '2021-09-09 17:18:07', '2021-09-09 17:18:07', 0);

-- --------------------------------------------------------

--
-- Table structure for table `verification_requests`
--

CREATE TABLE `verification_requests` (
  `id` int(11) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `expires` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_95843cea26fc65b1a9d9b6e1d2` (`compound_id`),
  ADD KEY `userId` (`user_id`),
  ADD KEY `providerId` (`provider_id`),
  ADD KEY `providerAccountId` (`provider_account_id`);

--
-- Indexes for table `Albums`
--
ALTER TABLE `Albums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Filters`
--
ALTER TABLE `Filters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `Images`
--
ALTER TABLE `Images`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Images_productBaseId_productBaseImageId_unique` (`productBaseId`,`productBaseImageId`),
  ADD KEY `productBaseImageId` (`productBaseImageId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `JobMeta`
--
ALTER TABLE `JobMeta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `job_id` (`job_id`);

--
-- Indexes for table `Jobs`
--
ALTER TABLE `Jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `JobTerms`
--
ALTER TABLE `JobTerms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Options`
--
ALTER TABLE `Options`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Permissions`
--
ALTER TABLE `Permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ProductBaseImages`
--
ALTER TABLE `ProductBaseImages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ProductBases`
--
ALTER TABLE `ProductBases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`),
  ADD KEY `providerId` (`providerId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `ProductBaseTags`
--
ALTER TABLE `ProductBaseTags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ProductBaseTerms`
--
ALTER TABLE `ProductBaseTerms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Providers`
--
ALTER TABLE `Providers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_f10db2949bbea55b44f31108e1` (`session_token`),
  ADD UNIQUE KEY `IDX_b02a7acc05fe8194bed8433cf2` (`access_token`);

--
-- Indexes for table `Tags`
--
ALTER TABLE `Tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Tags_productBaseId_productBaseTagId_unique` (`productBaseId`,`productBaseTagId`),
  ADD KEY `productBaseTagId` (`productBaseTagId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `TermMeta`
--
ALTER TABLE `TermMeta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `term_id` (`term_id`);

--
-- Indexes for table `Terms`
--
ALTER TABLE `Terms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `TermTaxonomies`
--
ALTER TABLE `TermTaxonomies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `term_id` (`term_id`);

--
-- Indexes for table `UserMeta`
--
ALTER TABLE `UserMeta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `email_5` (`email`),
  ADD UNIQUE KEY `email_6` (`email`),
  ADD UNIQUE KEY `email_7` (`email`),
  ADD UNIQUE KEY `email_8` (`email`),
  ADD UNIQUE KEY `email_9` (`email`),
  ADD UNIQUE KEY `email_10` (`email`),
  ADD UNIQUE KEY `email_11` (`email`),
  ADD UNIQUE KEY `email_12` (`email`),
  ADD UNIQUE KEY `email_13` (`email`),
  ADD UNIQUE KEY `email_14` (`email`),
  ADD UNIQUE KEY `email_15` (`email`),
  ADD UNIQUE KEY `email_16` (`email`),
  ADD UNIQUE KEY `email_17` (`email`),
  ADD UNIQUE KEY `email_18` (`email`),
  ADD UNIQUE KEY `email_19` (`email`),
  ADD UNIQUE KEY `email_20` (`email`),
  ADD UNIQUE KEY `email_21` (`email`),
  ADD UNIQUE KEY `email_22` (`email`),
  ADD UNIQUE KEY `email_23` (`email`),
  ADD UNIQUE KEY `email_24` (`email`),
  ADD UNIQUE KEY `email_25` (`email`),
  ADD UNIQUE KEY `email_26` (`email`),
  ADD UNIQUE KEY `email_27` (`email`),
  ADD UNIQUE KEY `email_28` (`email`),
  ADD UNIQUE KEY `email_29` (`email`),
  ADD UNIQUE KEY `email_30` (`email`),
  ADD UNIQUE KEY `email_31` (`email`),
  ADD UNIQUE KEY `email_32` (`email`),
  ADD UNIQUE KEY `email_33` (`email`),
  ADD UNIQUE KEY `email_34` (`email`),
  ADD UNIQUE KEY `email_35` (`email`),
  ADD UNIQUE KEY `email_36` (`email`),
  ADD UNIQUE KEY `email_37` (`email`),
  ADD UNIQUE KEY `email_38` (`email`),
  ADD UNIQUE KEY `email_39` (`email`),
  ADD UNIQUE KEY `email_40` (`email`),
  ADD UNIQUE KEY `email_41` (`email`),
  ADD UNIQUE KEY `email_42` (`email`),
  ADD UNIQUE KEY `email_43` (`email`),
  ADD UNIQUE KEY `email_44` (`email`),
  ADD UNIQUE KEY `email_45` (`email`),
  ADD UNIQUE KEY `email_46` (`email`),
  ADD UNIQUE KEY `email_47` (`email`),
  ADD UNIQUE KEY `email_48` (`email`),
  ADD UNIQUE KEY `email_49` (`email`),
  ADD UNIQUE KEY `email_50` (`email`),
  ADD UNIQUE KEY `email_51` (`email`),
  ADD UNIQUE KEY `email_52` (`email`),
  ADD UNIQUE KEY `email_53` (`email`),
  ADD UNIQUE KEY `email_54` (`email`),
  ADD UNIQUE KEY `email_55` (`email`),
  ADD UNIQUE KEY `email_56` (`email`),
  ADD UNIQUE KEY `email_57` (`email`),
  ADD UNIQUE KEY `email_58` (`email`),
  ADD UNIQUE KEY `email_59` (`email`),
  ADD UNIQUE KEY `email_60` (`email`),
  ADD UNIQUE KEY `email_61` (`email`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `UserTerms`
--
ALTER TABLE `UserTerms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `term_taxonomy_id` (`term_taxonomy_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `verification_requests`
--
ALTER TABLE `verification_requests`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_77287cef70a4627091ae6d19c4` (`token`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Albums`
--
ALTER TABLE `Albums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Categories`
--
ALTER TABLE `Categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Filters`
--
ALTER TABLE `Filters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Images`
--
ALTER TABLE `Images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `JobMeta`
--
ALTER TABLE `JobMeta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1169;

--
-- AUTO_INCREMENT for table `Jobs`
--
ALTER TABLE `Jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `JobTerms`
--
ALTER TABLE `JobTerms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=584;

--
-- AUTO_INCREMENT for table `Options`
--
ALTER TABLE `Options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `Permissions`
--
ALTER TABLE `Permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ProductBaseImages`
--
ALTER TABLE `ProductBaseImages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ProductBases`
--
ALTER TABLE `ProductBases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ProductBaseTags`
--
ALTER TABLE `ProductBaseTags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ProductBaseTerms`
--
ALTER TABLE `ProductBaseTerms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Providers`
--
ALTER TABLE `Providers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Tags`
--
ALTER TABLE `Tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `TermMeta`
--
ALTER TABLE `TermMeta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Terms`
--
ALTER TABLE `Terms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `TermTaxonomies`
--
ALTER TABLE `TermTaxonomies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `UserMeta`
--
ALTER TABLE `UserMeta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `UserTerms`
--
ALTER TABLE `UserTerms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=209;

--
-- AUTO_INCREMENT for table `verification_requests`
--
ALTER TABLE `verification_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Albums`
--
ALTER TABLE `Albums`
  ADD CONSTRAINT `albums_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `Categories`
--
ALTER TABLE `Categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `Filters`
--
ALTER TABLE `Filters`
  ADD CONSTRAINT `filters_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `Images`
--
ALTER TABLE `Images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`productBaseId`) REFERENCES `ProductBases` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `images_ibfk_2` FOREIGN KEY (`productBaseImageId`) REFERENCES `ProductBaseImages` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `images_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `JobMeta`
--
ALTER TABLE `JobMeta`
  ADD CONSTRAINT `jobmeta_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `Jobs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `Jobs`
--
ALTER TABLE `Jobs`
  ADD CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `ProductBases`
--
ALTER TABLE `ProductBases`
  ADD CONSTRAINT `productbases_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `Categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `productbases_ibfk_2` FOREIGN KEY (`providerId`) REFERENCES `Providers` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `productbases_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `Tags`
--
ALTER TABLE `Tags`
  ADD CONSTRAINT `tags_ibfk_1` FOREIGN KEY (`productBaseId`) REFERENCES `ProductBases` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tags_ibfk_2` FOREIGN KEY (`productBaseTagId`) REFERENCES `ProductBaseTags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tags_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `TermMeta`
--
ALTER TABLE `TermMeta`
  ADD CONSTRAINT `termmeta_ibfk_1` FOREIGN KEY (`term_id`) REFERENCES `Terms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `TermTaxonomies`
--
ALTER TABLE `TermTaxonomies`
  ADD CONSTRAINT `termtaxonomies_ibfk_1` FOREIGN KEY (`term_id`) REFERENCES `Terms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `UserMeta`
--
ALTER TABLE `UserMeta`
  ADD CONSTRAINT `usermeta_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `Roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `UserTerms`
--
ALTER TABLE `UserTerms`
  ADD CONSTRAINT `userterms_ibfk_1` FOREIGN KEY (`term_taxonomy_id`) REFERENCES `TermTaxonomies` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `userterms_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

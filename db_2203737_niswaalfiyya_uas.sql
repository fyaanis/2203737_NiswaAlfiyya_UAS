-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2024 at 11:03 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2203737_niswaalfiyya_uas`
--

-- --------------------------------------------------------

--
-- Table structure for table `inventory_niswaalfiyya`
--

CREATE TABLE `inventory_niswaalfiyya` (
  `id` int(255) NOT NULL,
  `nama_barang` varchar(255) NOT NULL,
  `jumlah` int(255) NOT NULL,
  `harga_satuan` int(255) NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `deskripsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventory_niswaalfiyya`
--

INSERT INTO `inventory_niswaalfiyya` (`id`, `nama_barang`, `jumlah`, `harga_satuan`, `lokasi`, `deskripsi`) VALUES
(12, 'Kursi Kayu', 20, 75000, 'Jakarta', 'Kursi kayu dengan desain minimalis'),
(13, 'Lemari Pakaian', 5, 300000, 'Denpasar', 'Lemari pakaian berbahan kayu jati'),
(14, 'Rak Buku', 15, 50000, 'Manokwari', 'Rak buku untuk ruang tamu'),
(16, 'Meja Belajar', 12, 120000, 'Jakarta', 'Meja belajar anak-anak dengan warna cerah'),
(18, 'Kasur Single', 7, 350000, 'Manokwari', 'Kasur single berbahan kayu dan busa'),
(19, 'Meja Makan', 15, 250000, 'Bandung', 'Meja makan kayu solid untuk keluarga'),
(20, 'Kabinet Dapur', 10, 180000, 'Jakarta', 'Kabinet dapur dengan desain modern dan minimalis');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inventory_niswaalfiyya`
--
ALTER TABLE `inventory_niswaalfiyya`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inventory_niswaalfiyya`
--
ALTER TABLE `inventory_niswaalfiyya`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

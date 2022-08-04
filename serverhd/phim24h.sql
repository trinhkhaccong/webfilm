-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 04, 2022 lúc 07:51 AM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `phim24h`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_film`
--

CREATE TABLE `tb_film` (
  `id` int(11) NOT NULL,
  `id_filmintro` int(11) NOT NULL,
  `name_vn` text NOT NULL,
  `name_en` text NOT NULL,
  `link_video_tm` text NOT NULL,
  `link_video_sub` text NOT NULL,
  `episode` int(11) NOT NULL,
  `root_link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tb_film`
--

INSERT INTO `tb_film` (`id`, `id_filmintro`, `name_vn`, `name_en`, `link_video_tm`, `link_video_sub`, `episode`, `root_link`) VALUES
(1, 1, 'Hoàn Hồn', '', 'https://scontent.cdninstagram.com/v/t42.27313-2/10000000_182065127586055_7682455428243791304_n.mp4?_nc_cat=104&vs=74431f4b1aa549b3&_nc_vs=HBksFQAYJEdJQ1dtQUFIZVVGWGxxVUFBTWdkUGpPQ2tKMXFickZxQUFBRhUAAsgBABUAGCRHSUNXbUFBMVJXNkUtRWtCQUM3WmtWbDE5czEzYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmttjg7djE3wQVAigCQzMYC3Z0c19wcmV2aWV3HBdAsEysSbpeNRgpZGFzaF9pNGxpdGViYXNpY181c2VjZ29wX2hxMl9mcmFnXzJfdmlkZW8SABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCogVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAEwEW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNDM1MDQ5NTExODIyMDkwEm9lbV92aWRlb19hc3NldF9pZA83MzA3MDk2ODQ5MzA5MjAVb2VtX3ZpZGVvX3Jlc291cmNlX2lkEDEzMzU5ODcyNzM0NzE1MTUcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAxNjUyODgzMDU1MDczNjI2DnZ0c19yZXF1ZXN0X2lkACUCHAAlxAEbB4gBcwQ3MDUzAmNkCjIwMjItMDYtMjUDcmNiATADYXBwBlZpZGVvcwJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MINDE3Mi44MzUCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-7&_nc_sid=b9e0b6&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=Pb3Rev3Bz9QAX81Amdd&_nc_ht=scontent-sin6-3.xx&edm=AFDoeYkEAAAA&oh=00_AT88F7hExzXbXb7uzE-KGKkpAVTsHZ9s_sDYQowOWd8AbQ&oe=62E94F79&_nc_rid=323296097632909&dl=1', 'https://scontent.cdninstagram.com/v/t39.25447-2/10000000_5945975078764276_1237360631530398592_n.mp4?_nc_cat=104&vs=1e3edf807ad46684&_nc_vs=HBksFQAYJEdJQ1dtQUQwdm1rMDFSOFZBSUFqYkVYdy1Dc1JibWRqQUFBRhUAAsgBABUAGCRHSUNXbUFETS02MGhDTk1DQUZSTndIblA3UVlFYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmyveKx53dhAIVAigCQzMYC3Z0c19wcmV2aWV3HBdAsEyrxqfvnhg0ZGFzaF9pNGxpdGViYXNpY19wYXNzdGhyb3VnaGFsaWduZWRfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsKiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATARb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZBAxNzI2MjM4Mzc3NzExODEzEm9lbV92aWRlb19hc3NldF9pZA81ODQzOTY2MjMxMjQyNjcVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzU3MzM0Nzc0MTEzMDIxMxxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkEDEwMTM5NDE3NTI2Mzg0NDkOdnRzX3JlcXVlc3RfaWQAJQIcACXEARsHiAFzBDI4MTkCY2QKMjAyMi0wNy0yNANyY2IBMANhcHAGVmlkZW9zAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwg0MTcyLjkwNAJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-7&_nc_sid=b9e0b6&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=REA_TshjfKcAX-dJp31&_nc_ht=scontent-sin6-3.xx&edm=AFDoeYkEAAAA&oh=00_AT9uut9LAINqHR5xq6-iPsQu3HCxUzoZm3LuAKEhNI3Cdg&oe=62EC6522&_nc_rid=073558184805674&dl=1', 1, 'hoan-hon');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_filmintro`
--

CREATE TABLE `tb_filmintro` (
  `id` int(11) NOT NULL,
  `year` year(4) NOT NULL,
  `director` text NOT NULL,
  `cast` text NOT NULL,
  `content` text NOT NULL,
  `link` text NOT NULL,
  `link_background` text NOT NULL,
  `name` text NOT NULL,
  `id_theloai` int(11) NOT NULL,
  `id_typephim` int(11) NOT NULL,
  `id_quocgia` int(11) NOT NULL,
  `time` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tb_filmintro`
--

INSERT INTO `tb_filmintro` (`id`, `year`, `director`, `cast`, `content`, `link`, `link_background`, `name`, `id_theloai`, `id_typephim`, `id_quocgia`, `time`) VALUES
(1, 2022, 'Park Joon Hwa', 'Lee Jae Wook, Jung So Min, Hwang Min Hyun, Shin Seung Ho, Oh Na Ra, Yoo Joon Sang', 'Hoàn Hồn Alchemy of Souls 2022 Full HD Vietsub Thuyết Minh Vào ngày 19 tháng 6, bộ phim truyền hình mới của tvN Hoàn Hồn đã đạt được sự gia tăng về lượng người xem cho tập thứ hai. Theo Nielsen Korea, bộ phim tình cảm giả tưởng với sự tham gia của Lee Jae Wook và Jung So Min đã đạt rating trung bình trên toàn quốc là 5,9%, đánh dấu sự gia tăng so với buổi công chiếu vào tối hôm trước.\nAlchemy of Souls là một bộ phim giả tưởng mang hương vị lịch sử đầy kịch tính như bạn mong đợi từ chị em nhà Hong. Những kẻ tai quái hoán đổi thân xác cạnh tranh với những cuộc đấu tay đôi phép thuật được đặt cược cao, dẫn đến một tập đầu tiên đầy hứa hẹn. Tuy nhiên, sức mạnh thực sự của nó lại xoay quanh nhân vật nữ chính quyến rũ giết người và những nỗ lực của cô ấy để tồn tại trong một cơ thể mới, yếu ớt hơn.', 'hoan-hon', 'https://cdn1.kenhvn2.com/temp/thumb/360_480_836996_poster-hoan-hon.jpeg', 'Hoàn Hồn', 7, 2, 2, '16'),
(2, 2022, 'David Leitch', 'Brad Pitt, Joey King, Andrew Koji, Aaron Taylor Johnson, Brian Tyree Henry, Zazie Beetz', 'Sát Thủ Đối Đầu Bullet Train 2022 Full HD Vietsub Thuyết Minh Trong bộ phim này Brad Pitt đóng vai Ladybug, một sát thủ xui xẻo quyết tâm thực hiện công việc của mình một cách hòa bình sau khi có quá nhiều hợp đồng biểu diễn không đạt yêu cầu. Tuy nhiên, số phận có thể có những kế hoạch khác, vì nhiệm vụ mới nhất của Ladybug đưa anh ta vào một khóa học va chạm với những kẻ thù nguy hiểm từ khắp nơi trên thế giới - tất cả đều có các mục tiêu được kết nối, nhưng xung đột - trên chuyến tàu nhanh nhất thế giới. Từ đạo diễn của Deadpool 2, David Leitch, đoạn kết chỉ là khởi đầu trong một chuyến đi hoang dã, không ngừng nghỉ qua Nhật Bản thời hiện đại.', 'sat-thu-doi-dau', 'https://cdn1.kenhvn2.com/temp/thumb/360_480_208155_nhiemvutankhoc2022.jpg', 'Sát Thủ Đối Đầu', 1, 1, 4, '126'),
(3, 2016, '', ' You Ge, Chương Tử Di, Tadanobu Asano, Chun Du, Chung Hân Đồng, Ni Yan, Siyan Huo, Dahong Ni, Geng Han, Ash Gordey, Chung Hán Lương, Baogang Zhao, Quan Yuan, Chuan-Jun Wang', 'Quá Khứ Hoàng Kim The Wasted Time 2016 Full HD Vietsub Thuyết Minh Trong vài thập kỷ, một thỏa thuận giữa quân đội Nhật Bản và bọn tội phạm ở Thượng Hải diễn ra bằng bạo lực và phản bội.', 'qua-khu-hoang-kim', 'https://cdn1.kenhvn2.com/temp/thumb/360_480_247786_poster_lat_mat_48h.jpg', 'Quá Khứ Hoàng Kim', 1, 1, 1, '125'),
(4, 2021, 'Doug Liman', 'Tom Holland, Daisy Ridley, Demián Bichir, David Oyelowo, Kurt Sutter, Cynthia Erivo, Bethany Anne Lind, Mads Mikkelsen, Nick Jonas, Ray McKinnon, Vincent Leclerc, Blane Crockarell, François Gauthier, Tyrone Benskin, Frank Fontaine,', 'Hành Tinh Hỗn Loạn Chaos Walking 2021 Full HD Vietsub Thuyết Minh Hai người bạn đồng hành khó có thể bắt đầu một cuộc phiêu lưu đầy nguy hiểm qua những vùng đất xấu của một hành tinh chưa được khám phá khi họ cố gắng thoát khỏi một thực tế nguy hiểm và mất phương hướng, nơi mọi suy nghĩ đều được nhìn thấy và lắng nghe bởi mọi người.', 'hanh-tinh-hon-loan', 'https://cdn1.kenhvn2.com/temp/thumb/360_480_46519_ngoai-vong-ohat-luat.jpg', 'Hành Tinh Hỗn Loạn', 6, 1, 4, '125'),
(5, 2021, 'Gu Shi Jun', ' Alex, Sun Sheng Hao, Ji Mu Chuan, Han Xin Rui', 'Tân Cô Kỳ Đàm 1: Ám Thành Sát Cơ Deadly Puppet 2021 Full HD Vietsub Thuyết Minh Phim kể về một loạt các vụ giết người ở thành phố Jingu sau khi Trung Quốc trở thành một nước Cộng hòa. Cảnh sát đang thua thiệt. Duẩn Yuhao và Qi Wei, người sử dụng Phong Thủy để giải quyết các vụ án, điều tra những gì đã xảy ra và dẫn đến Vụ giết người hàng loạt Rakshasa nhiều năm trước tại một thành phố bí ẩn dưới lòng đất', 'tan-co-ky-dam-1-am-thanh-sat-co', 'https://cdn1.kenhvn2.com/temp/thumb/360_480_339220_007.jpg', 'Tân Cô Kỳ Đàm 1: Ám Thành Sát Cơ', 6, 1, 1, '97'),
(6, 2021, ' Anthony Fabian', 'Jason Isaacs, Lesley Manville, Alba Baptista,', 'Quý Bà Harris Đến Paris Mrs Harris Goes to Paris 2022 Full HD Vietsub Thuyết Minh Bạn là tín đồ thời trang thì đừng nên bỏ qua bộ phim này. Hợp tác với Nhà Dior, MRS. HARRIS GOES TO PARIS kể câu chuyện về một phụ nữ dọn dẹp góa bụa ở London những năm 1950, người yêu điên cuồng chiếc váy Dior thời trang cao cấp và quyết định rằng cô ấy phải có một chiếc của riêng mình. Sau khi làm việc, nhịn đói và đánh bạc để gây quỹ theo đuổi ước mơ của mình, cô bắt đầu một cuộc phiêu lưu đến Paris, nơi sẽ thay đổi không chỉ cách nhìn của chính cô mà còn cả tương lai của Nhà Dior.', 'quy-ba-harris-den-paris', 'https://cdn1.kenhvn2.com/temp/thumb/360_480_695198_1.jpg', 'Quý Bà Harris Đến Paris', 5, 1, 4, '115'),
(7, 2022, 'Oran Zegman', 'Angourie Rice, Gaten Matarazzo, Christopher Mintz-Plasse', 'Đối Thủ Xứng Tầm Honor Society 2022 Full HD Vietsub Thuyết Minh HONOR SOCIETY theo chân Honor (Angourie Rice), một học sinh trung học đầy tham vọng với mục tiêu tập trung duy nhất là vào Harvard, giả sử rằng cô ấy có thể ghi điểm đầu tiên khi được cố vấn hướng dẫn của mình, ông Calvin (Christopher Mintz-Plasse). Sẵn sàng làm bất cứ điều gì cần thiết, Honor vạch ra một kế hoạch của Machiavellian để hạ gục ba đối thủ cạnh tranh sinh viên hàng đầu của cô, cho đến khi mọi thứ chuyển hướng khi cô bất ngờ rơi vào đối thủ lớn nhất của mình, Michael (Gaten Matarazzo).', 'doi-thu-xung-tam', 'https://cdn1.kenhvn2.com/temp/thumb/360_480_879754_1.JPG', 'Đối Thủ Xứng Tầm', 5, 1, 4, '115'),
(8, 2022, ' Wei-Hao Cheng', 'Trương Chấn, Trương Quân Ninh, Anke Sun, Lý Minh Thuận, Baijia Zhang, Hui-Min Lin, Samuel Ku, Hsueh-Feng Lu, He-Hsuan Lin, McFly Wu, Che-Hao Chang', 'Truy Hồn Ji hun 2021 Full HD Vietsub Thuyết Minh Người sáng lập của một tập đoàn phát triển một phương pháp điều trị ung thư trong tương lai bị sát hại một cách dã man, và một công tố viên đứng ngoài cuộc vì bệnh tật yêu cầu lãnh đạo vụ án, với sự hỗ trợ của người vợ thám tử mới mang thai của anh ta.', 'truy-hon', 'https://cdn1.kenhvn2.com/temp/thumb/360_480_14085_na-tra.jpg', 'Truy Hồn', 5, 1, 4, '115');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_quocgia`
--

CREATE TABLE `tb_quocgia` (
  `id` int(11) NOT NULL,
  `link` text NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tb_quocgia`
--

INSERT INTO `tb_quocgia` (`id`, `link`, `name`) VALUES
(1, 'phim-trung-quoc', 'Phim Trung Quốc'),
(2, 'phim-han-quoc', 'Phim Hàn Quốc'),
(3, 'phim-nhat-ban', 'Phim Nhật Bản'),
(4, 'phim-au-my', 'Phim Âu Mỹ'),
(5, 'phim-thai-lan', 'Phim Thái Lan'),
(6, 'phim-dai-loan', 'Phim Đài Loan'),
(7, 'phim-tong-hop', 'Phim Tổng Hợp'),
(8, 'phim-hong-kong', 'Phim Hồng Kông'),
(9, 'phim-viet-nam', 'Phim Việt Nam');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_theloai`
--

CREATE TABLE `tb_theloai` (
  `id` int(11) NOT NULL,
  `link` text NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tb_theloai`
--

INSERT INTO `tb_theloai` (`id`, `link`, `name`) VALUES
(1, 'phim-hanh-dong', 'Phim Hành Động'),
(2, 'phim-vo-thuat', 'Phim Võ Thuật'),
(3, 'phim-tinh-cam', 'Phim Tình Cảm'),
(4, 'phim-hoat-hinh', 'Phim Hoạt Hình'),
(5, 'phim-hai-huoc', 'Phim Hài Hước'),
(6, 'phim-vien-tuong', 'Phim Viễn Tưởng'),
(7, 'phim-co-trang', 'Phim Cổ Trang'),
(8, 'phim-phieu-luu', 'Phim Phiêu Lưu'),
(9, 'phim-tam-ly', 'Phim Tâm Lý'),
(10, 'phim-khoa-hoc', 'Phim Khoa Học'),
(11, 'phim-hinh-su', 'Phim Hình Sự'),
(12, 'phim-ma-kinh-di', 'Phim Ma - Kinh Dị'),
(13, 'phim-chien-tranh', 'Phim Chiến Tranh'),
(14, 'phim-am-nhac', 'Phim Âm Nhạc'),
(15, 'phim-the-thao', 'Phim Thể Thao'),
(16, 'phim-than-thoai', 'Phim Thần Thoại'),
(17, 'game-show', 'Game show'),
(18, 'phim-truyen-hinh', 'Phim Truyền Hình'),
(19, 'phim-chieu-rap', 'Phim Chiếu Rạp'),
(20, 'phim-anime', 'Phim Anime '),
(21, 'phim-sap-chieu', 'Phim Sắp Chiếu'),
(22, 'phim-thuyet-minh', 'Phim Thuyết Minh');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_typephim`
--

CREATE TABLE `tb_typephim` (
  `id` int(11) NOT NULL,
  `link` text NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tb_typephim`
--

INSERT INTO `tb_typephim` (`id`, `link`, `name`) VALUES
(1, 'phim-le', 'Phim Lẻ'),
(2, 'phim-bo', 'Phim Bộ');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tb_film`
--
ALTER TABLE `tb_film`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tb_filmintro`
--
ALTER TABLE `tb_filmintro`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tb_quocgia`
--
ALTER TABLE `tb_quocgia`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tb_theloai`
--
ALTER TABLE `tb_theloai`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tb_typephim`
--
ALTER TABLE `tb_typephim`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tb_film`
--
ALTER TABLE `tb_film`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `tb_filmintro`
--
ALTER TABLE `tb_filmintro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `tb_quocgia`
--
ALTER TABLE `tb_quocgia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `tb_theloai`
--
ALTER TABLE `tb_theloai`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `tb_typephim`
--
ALTER TABLE `tb_typephim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

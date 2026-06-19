'use client';

import React, { useState, useCallback } from 'react';
import MathText from '@/components/math/MathText';
import { 
  Award, 
  BookOpen, 
  Layers, 
  HelpCircle, 
  Trophy, 
  RotateCcw, 
  Play, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  XCircle,
  ChevronRight,
  Brain,
  AlertCircle
} from 'lucide-react';

interface Question {
  id: number;
  type: 'mc' | 'tf' | 'fill' | 'formula' | 'quick';
  topic: string;
  q: string;
  opts?: string[];
  ans: number | boolean;
  note?: string;
}

const BANK: Question[] = [
  {id:1,type:"mc",topic:"L6",q:"Góc bẹt có số đo bằng:",opts:["90°","120°","180°","360°"],ans:2},
  {id:2,type:"mc",topic:"L6",q:"Hai góc phụ nhau có tổng số đo bằng:",opts:["45°","90°","180°","270°"],ans:1},
  {id:3,type:"mc",topic:"L6",q:"Tia phân giác của một góc chia góc đó thành:",opts:["Hai góc bù nhau","Hai góc bằng nhau","Hai góc phụ nhau","Hai góc kề bù"],ans:1},
  {id:4,type:"mc",topic:"L6",q:"Hình có bốn cạnh bằng nhau và bốn góc vuông là:",opts:["Hình thoi","Hình chữ nhật","Hình vuông","Hình bình hành"],ans:2},
  {id:5,type:"mc",topic:"L7",q:"Tổng ba góc trong của một tam giác bằng:",opts:["90°","180°","270°","360°"],ans:1},
  {id:6,type:"mc",topic:"L7",q:"Tam giác cân là tam giác có:",opts:["Ba cạnh bằng nhau","Hai cạnh bằng nhau","Một góc vuông","Một góc tù"],ans:1},
  {id:7,type:"mc",topic:"L7",q:"Hai góc đối đỉnh thì:",opts:["Bù nhau","Phụ nhau","Bằng nhau","Kề nhau"],ans:2},
  {id:8,type:"mc",topic:"L7",q:"Nếu a // b, hai góc so le trong tạo bởi đường cắt thì:",opts:["Bù nhau (=180°)","Bằng nhau","Phụ nhau (=90°)","Không liên quan"],ans:1},
  {id:9,type:"mc",topic:"L7",q:"Nếu a // b, hai góc trong cùng phía tạo bởi đường cắt thì:",opts:["Bằng nhau","Phụ nhau","Bù nhau (tổng 180°)","Đối đỉnh"],ans:2},
  {id:10,type:"mc",topic:"L7",q:"Đường trung tuyến của tam giác là đoạn nối:",opts:["Hai đỉnh bất kỳ","Đỉnh đến chân đường cao","Đỉnh đến trung điểm cạnh đối diện","Trung điểm hai cạnh"],ans:2},
  {id:11,type:"mc",topic:"L7",q:"Ba đường trung tuyến của tam giác cắt nhau tại:",opts:["Trực tâm","Trọng tâm","Tâm ngoại tiếp","Tâm nội tiếp"],ans:1},
  {id:12,type:"mc",topic:"L7",q:"Trọng tâm G chia mỗi đường trung tuyến theo tỉ lệ (kể từ đỉnh):",opts:["1:1","1:2","2:1","3:1"],ans:2},
  {id:13,type:"mc",topic:"L8",q:"Hình bình hành là tứ giác có:",opts:["Bốn góc vuông","Bốn cạnh bằng nhau","Hai cặp cạnh đối song song","Hai đường chéo bằng nhau"],ans:2},
  {id:14,type:"mc",topic:"L8",q:"Trong hình bình hành, hai đường chéo:",opts:["Bằng nhau","Vuông góc nhau","Cắt nhau tại trung điểm mỗi đường","Không cắt nhau"],ans:2},
  {id:15,type:"mc",topic:"L8",q:"Hình chữ nhật là hình bình hành có thêm:",opts:["Bốn cạnh bằng nhau","Bốn góc vuông","Hai đường chéo vuông góc","Hai đường chéo bằng nhau và vuông góc"],ans:1},
  {id:16,type:"mc",topic:"L8",q:"Hình thoi là hình bình hành có thêm:",opts:["Bốn góc vuông","Bốn cạnh bằng nhau","Hai đường chéo bằng nhau","Một góc vuông"],ans:1},
  {id:17,type:"mc",topic:"L8",q:"Hai đường chéo của hình thoi:",opts:["Bằng nhau","Vuông góc nhau tại trung điểm mỗi đường","Song song nhau","Không cắt nhau"],ans:1},
  {id:18,type:"mc",topic:"L8",q:"Hình thang cân có tính chất đặc biệt:",opts:["Bốn cạnh bằng nhau","Hai đường chéo bằng nhau","Bốn góc vuông","Hai đường chéo vuông góc"],ans:1},
  {id:19,type:"mc",topic:"L8",q:"Đường trung bình của tam giác song song và bằng:",opts:["Cạnh đáy","Hai lần cạnh đáy","Một nửa cạnh đáy","Một phần ba cạnh đáy"],ans:2},
  {id:20,type:"mc",topic:"L8",q:"Đường trung bình của hình thang bằng:",opts:["Tổng hai đáy","Hiệu hai đáy","Nửa tổng hai đáy","Nửa hiệu hai đáy"],ans:2},
  {id:21,type:"mc",topic:"L8",q:"Định lý Thalès: nếu DE // BC trong tam giác ABC thì:",opts:["AD = AE","AD/AB = AE/AC","DE = BC","AD + DB = AE + EC"],ans:1},
  {id:22,type:"mc",topic:"L8",q:"Trong tam giác vuông, cạnh huyền là:",opts:["Cạnh ngắn nhất","Cạnh góc vuông lớn hơn","Cạnh đối diện với góc vuông","Cạnh bất kỳ"],ans:2},
  {id:23,type:"mc",topic:"L8",q:"Định lý Pythagore: trong tam giác vuông cạnh góc vuông a, b và cạnh huyền c:",opts:["a + b = c","a² - b² = c²","a² + b² = c²","(a+b)² = c²"],ans:2},
  {id:24,type:"mc",topic:"L8",q:"Hai tam giác đồng dạng với tỉ số k. Tỉ số diện tích bằng:",opts:["k","2k","k²","√k"],ans:2},
  {id:25,type:"mc",topic:"L8",q:"Trường hợp đồng dạng g-g của tam giác cần:",opts:["Ba cặp cạnh tỉ lệ","Hai cặp góc bằng nhau","Hai cạnh tỉ lệ và góc xen giữa bằng nhau","Một cặp cạnh bằng nhau"],ans:1},
  {id:26,type:"mc",topic:"L7",q:"Tam giác đều có ba góc mỗi góc bằng:",opts:["45°","60°","90°","120°"],ans:1},
  {id:27,type:"mc",topic:"L8",q:"Hình vuông vừa là hình chữ nhật vừa là:",opts:["Hình thang","Hình thoi","Hình bình hành thường","Hình đa giác đều bất kỳ"],ans:1},
  {id:28,type:"mc",topic:"L6",q:"Hai đường thẳng vuông góc với nhau tạo thành góc:",opts:["45°","60°","90°","180°"],ans:2},
  {id:29,type:"mc",topic:"L7",q:"Đường cao của tam giác là đoạn thẳng:",opts:["Nối hai đỉnh","Vuông góc từ đỉnh đến cạnh đối diện","Nối đỉnh với trung điểm cạnh đối","Chia đôi một góc"],ans:1},
  {id:30,type:"mc",topic:"L8",q:"Tứ giác có tổng bốn góc trong bằng:",opts:["180°","270°","360°","540°"],ans:2},
  {id:31,type:"tf",topic:"L6",q:"Hai góc bù nhau có tổng bằng 180°.",ans:true},
  {id:32,type:"tf",topic:"L6",q:"Hai góc đối đỉnh thì bù nhau.",ans:false,note:"Hai góc đối đỉnh thì BẰNG NHAU"},
  {id:33,type:"tf",topic:"L7",q:"Tam giác có thể có hai góc tù.",ans:false,note:"Tổng 3 góc = 180°, không thể có 2 góc > 90°"},
  {id:34,type:"tf",topic:"L7",q:"Tam giác cân có hai góc ở đáy bằng nhau.",ans:true},
  {id:35,type:"tf",topic:"L7",q:"Trọng tâm của tam giác nằm trên cạnh của tam giác.",ans:false,note:"Trọng tâm nằm BÊN TRONG tam giác"},
  {id:36,type:"tf",topic:"L8",q:"Mọi hình chữ nhật đều là hình bình hành.",ans:true},
  {id:37,type:"tf",topic:"L8",q:"Mọi hình bình hành đều là hình chữ nhật.",ans:false,note:"Hình chữ nhật cần thêm 4 góc vuông"},
  {id:38,type:"tf",topic:"L8",q:"Hình vuông là hình thoi.",ans:true},
  {id:39,type:"tf",topic:"L8",q:"Hai đường chéo của hình chữ nhật vuông góc nhau.",ans:false,note:"Hai đường chéo HCN bằng nhau, không nhất thiết vuông góc"},
  {id:40,type:"tf",topic:"L8",q:"Hai đường chéo của hình thoi bằng nhau.",ans:false,note:"Hai đường chéo HT vuông góc nhau, không nhất thiết bằng nhau"},
  {id:41,type:"tf",topic:"L8",q:"Đường trung bình của tam giác song song với cạnh thứ ba.",ans:true},
  {id:42,type:"tf",topic:"L8",q:"Trong tam giác vuông, cạnh huyền là cạnh ngắn nhất.",ans:false,note:"Cạnh huyền là cạnh DÀI NHẤT"},
  {id:43,type:"tf",topic:"L8",q:"Nếu a² + b² = c² thì tam giác có ba cạnh a, b, c là tam giác vuông.",ans:true},
  {id:44,type:"tf",topic:"L7",q:"Hai góc đồng vị tạo bởi đường cắt hai đường song song thì bằng nhau.",ans:true},
  {id:45,type:"tf",topic:"L8",q:"Hình thang cân có hai đường chéo bằng nhau.",ans:true},
  {id:46,type:"tf",topic:"L8",q:"Hai tam giác đồng dạng thì có diện tích bằng nhau.",ans:false,note:"Tỉ số diện tích = k², chỉ bằng nhau khi k=1"},
  {id:47,type:"tf",topic:"L6",q:"Hình vuông là trường hợp đặc biệt của hình chữ nhật.",ans:true},
  {id:48,type:"tf",topic:"L8",q:"Trong hình bình hành, hai cặp góc đối bằng nhau.",ans:true},
  {id:49,type:"tf",topic:"L7",q:"Tam giác đều là tam giác cân.",ans:true},
  {id:50,type:"tf",topic:"L8",q:"Đường trung bình hình thang song song với cả hai đáy.",ans:true},
  {id:51,type:"formula",topic:"L6",q:"Diện tích hình chữ nhật có chiều dài a, chiều rộng b:",opts:["S = a + b","S = 2(a+b)","S = a × b","S = a² + b²"],ans:2},
  {id:52,type:"formula",topic:"L6",q:"Chu vi hình vuông cạnh a:",opts:["C = a²","C = 2a","C = 3a","C = 4a"],ans:3},
  {id:53,type:"formula",topic:"L6",q:"Diện tích tam giác có đáy a, chiều cao h:",opts:["S = a × h","S = a × h / 2","S = (a + h) / 2","S = 2ah"],ans:1},
  {id:54,type:"formula",topic:"L6",q:"Diện tích hình thang có hai đáy a, b và chiều cao h:",opts:["S = (a+b) × h","S = (a-b) × h / 2","S = (a+b) × h / 2","S = a × b × h"],ans:2},
  {id:55,type:"formula",topic:"L6",q:"Chu vi hình tròn bán kính r:",opts:["C = πr²","C = 2πr","C = πr","C = 4r"],ans:1},
  {id:56,type:"formula",topic:"L6",q:"Diện tích hình tròn bán kính r:",opts:["S = 2πr","S = πr","S = πr²","S = 2πr²"],ans:2},
  {id:57,type:"formula",topic:"L8",q:"Diện tích hình bình hành có đáy a, chiều cao h:",opts:["S = a + h","S = 2(a+h)","S = a × h / 2","S = a × h"],ans:3},
  {id:58,type:"formula",topic:"L8",q:"Diện tích hình thoi có hai đường chéo d₁ và d₂:",opts:["S = d₁ + d₂","S = d₁ × d₂","S = d₁ × d₂ / 2","S = (d₁ + d₂) / 2"],ans:2},
  {id:59,type:"formula",topic:"L8",q:"Diện tích hình vuông cạnh a:",opts:["S = 4a","S = 2a²","S = a²","S = a³"],ans:2},
  {id:60,type:"formula",topic:"L8",q:"Đường trung bình MN của hình thang (đáy AB và CD):",opts:["MN = AB + CD","MN = AB - CD","MN = (AB + CD) / 2","MN = (AB - CD) / 2"],ans:2},
  {id:61,type:"formula",topic:"L8",q:"Tính cạnh huyền c từ hai cạnh góc vuông a, b:",opts:["c = a + b","c = √(a + b)","c = √(a² + b²)","c = a² + b²"],ans:2},
  {id:62,type:"formula",topic:"L8",q:"Tính cạnh góc vuông b khi biết a và c (cạnh huyền):",opts:["b = c - a","b = √(c - a)","b = √(c² - a²)","b = c² - a²"],ans:2},
  {id:63,type:"formula",topic:"L6",q:"Chu vi hình chữ nhật dài a, rộng b:",opts:["C = a × b","C = a + b","C = 2a + b","C = 2(a + b)"],ans:3},
  {id:64,type:"formula",topic:"L6",q:"Diện tích hình bình hành đáy a, chiều cao h:",opts:["S = a + h","S = a × h","S = a × h / 2","S = 2(a + h)"],ans:1},
  {id:65,type:"formula",topic:"L8",q:"Tỉ số diện tích hai tam giác đồng dạng với tỉ số k:",opts:["k","k/2","k²","2k"],ans:2},
  {id:66,type:"fill",topic:"L6",q:'Hai góc _____ có tổng bằng 180°:',opts:["Phụ nhau","Bù nhau","Đối đỉnh","Kề nhau"],ans:1},
  {id:67,type:"fill",topic:"L7",q:'Tam giác có ba góc nhọn gọi là tam giác _____:',opts:["Vuông","Tù","Nhọn","Cân"],ans:2},
  {id:68,type:"fill",topic:"L7",q:'Ba đường _____ của tam giác cắt nhau tại trọng tâm:',opts:["Phân giác","Cao","Trung trực","Trung tuyến"],ans:3},
  {id:69,type:"fill",topic:"L8",q:'Hình _____ là hình bình hành có 4 cạnh bằng nhau:',opts:["Chữ nhật","Vuông","Thoi","Thang"],ans:2},
  {id:70,type:"fill",topic:"L8",q:'Hình _____ là hình bình hành có 4 góc vuông:',opts:["Thoi","Chữ nhật","Vuông","Thang cân"],ans:1},
  {id:71,type:"fill",topic:"L8",q:'Đường trung bình của tam giác nối _____ hai cạnh của tam giác:',opts:["Đỉnh","Trung điểm","Chân đường cao","Giao điểm"],ans:1},
  {id:72,type:"fill",topic:"L8",q:'Trong hình bình hành, hai đường chéo cắt nhau tại _____ mỗi đường:',opts:["Điểm đầu","Điểm cuối","Trung điểm","Điểm chia tỉ lệ 1:3"],ans:2},
  {id:73,type:"fill",topic:"L7",q:'Đường _____ là đoạn thẳng vuông góc từ đỉnh đến cạnh đối diện:',opts:["Trung tuyến","Phân giác","Cao","Trung trực"],ans:2},
  {id:74,type:"fill",topic:"L6",q:'Góc _____ có số đo bằng 90°:',opts:["Nhọn","Tù","Bẹt","Vuông"],ans:3},
  {id:75,type:"fill",topic:"L8",q:'Định lý Thalès đảo dùng để chứng minh hai đường thẳng _____:',opts:["Bằng nhau","Song song","Vuông góc","Cắt nhau"],ans:1},
  {id:76,type:"fill",topic:"L8",q:'Hai tam giác _____ có góc tương ứng bằng nhau và cạnh tương ứng tỉ lệ:',opts:["Bằng nhau","Đồng dạng","Cân","Vuông"],ans:1},
  {id:77,type:"fill",topic:"L7",q:'Tam giác _____ có ba cạnh bằng nhau và ba góc bằng nhau:',opts:["Cân","Vuông","Đều","Tù"],ans:2},
  {id:78,type:"fill",topic:"L8",q:'Hình thang có hai đường chéo bằng nhau gọi là hình thang _____:',opts:["Vuông","Cân","Đặc biệt","Đều"],ans:1},
  {id:79,type:"fill",topic:"L6",q:'Hình có bốn cạnh bằng nhau và bốn góc vuông là hình _____:',opts:["Thoi","Bình hành","Chữ nhật","Vuông"],ans:3},
  {id:80,type:"fill",topic:"L8",q:'Trong tam giác vuông, bình phương _____ bằng tổng bình phương hai cạnh góc vuông:',opts:["Đường cao","Đường trung tuyến","Cạnh huyền","Đường phân giác"],ans:2},
  {id:81,type:"quick",topic:"L6",q:"Hình chữ nhật dài 5 cm, rộng 3 cm. Diện tích bằng:",opts:["8 cm²","15 cm²","16 cm²","30 cm²"],ans:1},
  {id:82,type:"quick",topic:"L6",q:"Hình vuông cạnh 6 cm. Chu vi bằng:",opts:["12 cm","18 cm","24 cm","36 cm"],ans:2},
  {id:83,type:"quick",topic:"L7",q:"Tam giác có góc A = 50°, góc B = 70°. Góc C bằng:",opts:["50°","60°","70°","80°"],ans:1},
  {id:84,type:"quick",topic:"L7",q:"Tam giác cân tại A, góc A = 40°. Góc B bằng:",opts:["40°","60°","70°","80°"],ans:2},
  {id:85,type:"quick",topic:"L8",q:"Hình bình hành AB = 7 cm, BC = 4 cm. Chu vi bằng:",opts:["11 cm","14 cm","22 cm","28 cm"],ans:2},
  {id:86,type:"quick",topic:"L8",q:"Đường trung bình tam giác, cạnh đáy BC = 10 cm. DE bằng:",opts:["5 cm","10 cm","15 cm","20 cm"],ans:0},
  {id:87,type:"quick",topic:"L8",q:"Hình thang có hai đáy 6 cm và 10 cm. Đường trung bình bằng:",opts:["4 cm","8 cm","16 cm","60 cm"],ans:1},
  {id:88,type:"quick",topic:"L8",q:"Tam giác vuông cạnh góc vuông 3 và 4. Cạnh huyền bằng:",opts:["5","6","7","√7"],ans:0},
  {id:89,type:"quick",topic:"L8",q:"Tam giác vuông cạnh huyền 13, một cạnh góc vuông 5. Cạnh kia bằng:",opts:["8","10","12","√194"],ans:2},
  {id:90,type:"quick",topic:"L6",q:"Tam giác có đáy 8 cm, chiều cao 5 cm. Diện tích bằng:",opts:["13 cm²","20 cm²","40 cm²","80 cm²"],ans:1},
  {id:91,type:"quick",topic:"L8",q:"Hình thoi có hai đường chéo 6 cm và 8 cm. Diện tích bằng:",opts:["14 cm²","24 cm²","48 cm²","96 cm²"],ans:1},
  {id:92,type:"quick",topic:"L7",q:"Tổng hai góc trong tam giác là 130°. Góc thứ ba bằng:",opts:["30°","50°","60°","70°"],ans:1},
  {id:93,type:"quick",topic:"L8",q:"Tam giác đồng dạng tỉ số k=3, cạnh nhỏ = 4 cm. Cạnh lớn tương ứng:",opts:["7 cm","8 cm","12 cm","16 cm"],ans:2},
  {id:94,type:"quick",topic:"L6",q:"Hình thang đáy 5 và 9, cao 4 cm. Diện tích bằng:",opts:["14 cm²","28 cm²","56 cm²","180 cm²"],ans:1},
  {id:95,type:"quick",topic:"L8",q:"Hình bình hành đáy 6 cm, chiều cao 4 cm. Diện tích bằng:",opts:["10 cm²","20 cm²","24 cm²","48 cm²"],ans:2},
  {id:96,type:"quick",topic:"L8",q:"Tam giác ABC có DE // BC, AD/DB = 1/2. BC = 12 cm thì DE bằng:",opts:["3 cm","4 cm","6 cm","8 cm"],ans:1},
  {id:97,type:"quick",topic:"L7",q:"Tam giác vuông cân có một góc nhọn bằng:",opts:["30°","45°","60°","75°"],ans:1},
  {id:98,type:"quick",topic:"L6",q:"Hình vuông cạnh 5 cm. Diện tích bằng:",opts:["10 cm²","20 cm²","25 cm²","30 cm²"],ans:2},
  {id:99,type:"quick",topic:"L8",q:"Hình chữ nhật đường chéo 10 cm, một cạnh 6 cm. Cạnh kia bằng:",opts:["4 cm","6 cm","8 cm","12 cm"],ans:2},
  {id:100,type:"quick",topic:"L8",q:"Tổng bốn góc của tứ giác bằng:",opts:["180°","270°","360°","540°"],ans:2},
  {id:101,type:"mc",topic:"L8",q:"Tính chất đường phân giác trong △ABC (AD phân giác ∠A): BD/DC =",opts:["AB/AC","AD/AB","BC/AB","AB/BC"],ans:0},
  {id:102,type:"mc",topic:"L7",q:"Ba đường trung trực của tam giác gặp nhau tại:",opts:["Trọng tâm","Trực tâm","Tâm đường tròn ngoại tiếp","Tâm đường tròn nội tiếp"],ans:2},
  {id:103,type:"tf",topic:"L7",q:"Ba đường cao của tam giác cắt nhau tại trọng tâm.",ans:false,note:"Ba đường cao cắt nhau tại TRỰC TÂM"},
  {id:104,type:"tf",topic:"L8",q:"Hình vuông vừa là hình thoi vừa là hình chữ nhật.",ans:true},
  {id:105,type:"fill",topic:"L8",q:'Hình _____ là tứ giác có đúng một cặp cạnh đối song song:',opts:["Bình hành","Vuông","Thang","Thoi"],ans:2},
  {id:106,type:"quick",topic:"L8",q:"Hình thang có đáy lớn 12, đáy nhỏ 6, cao 4. Diện tích bằng:",opts:["24 cm²","36 cm²","48 cm²","72 cm²"],ans:1},
  {id:107,type:"mc",topic:"L6",q:"Hai đường thẳng song song là hai đường thẳng:",opts:["Cùng đi qua một điểm","Không có điểm chung","Vuông góc nhau","Tạo góc 45°"],ans:1},
  {id:108,type:"tf",topic:"L6",q:"Qua một điểm nằm ngoài đường thẳng, có vô số đường thẳng song song với đường thẳng đó.",ans:false,note:"Có đúng MỘT đường thẳng (Tiên đề Euclid)"},
  {id:109,type:"fill",topic:"L7",q:'Góc _____ của tam giác bằng tổng hai góc trong không kề với nó:',opts:["Trong","Ngoài","Đỉnh","Đáy"],ans:1},
  {id:110,type:"quick",topic:"L7",q:"Góc ngoài tại C của △ABC: ∠A = 40°, ∠B = 75°. Góc ngoài tại C bằng:",opts:["35°","105°","115°","145°"],ans:2},
  {id:111,type:"mc",topic:"L8",q:"Hai đường chéo của hình vuông:",opts:["Chỉ bằng nhau","Chỉ vuông góc nhau","Bằng nhau, vuông góc và cắt tại trung điểm","Không cắt nhau"],ans:2},
  {id:112,type:"tf",topic:"L8",q:"Mọi hình thoi đều là hình bình hành.",ans:true},
  {id:113,type:"formula",topic:"L8",q:"Diện tích hình chữ nhật có chiều dài a và đường chéo d:",opts:["S = a × d","S = a × √(d²-a²)","S = d² - a²","S = a(d-a)"],ans:1},
  {id:114,type:"quick",topic:"L8",q:"Hình vuông có đường chéo 10 cm. Cạnh bằng (√2 ≈ 1,41):",opts:["5 cm","7,07 cm","8 cm","10 cm"],ans:1},
  {id:115,type:"mc",topic:"L8",q:"Tam giác có ba cạnh 5, 12, 13. Đây là tam giác:",opts:["Nhọn","Tù","Vuông","Đều"],ans:2},
  {id:116,type:"tf",topic:"L8",q:"Đường trung bình chia tam giác thành hai tam giác bằng nhau.",ans:false,note:"Chia thành một tam giác nhỏ đồng dạng và một hình thang"},
  {id:117,type:"fill",topic:"L6",q:'Góc có số đo lớn hơn 90° và nhỏ hơn 180° gọi là góc _____:',opts:["Nhọn","Bẹt","Tù","Vuông"],ans:2},
  {id:118,type:"quick",topic:"L6",q:"Hình tròn bán kính 7 cm (π ≈ 3,14). Diện tích xấp xỉ:",opts:["21,98 cm²","43,96 cm²","153,86 cm²","307,72 cm²"],ans:2},
  {id:119,type:"mc",topic:"L8",q:"△ABC ~ △DEF, k=2, chu vi △DEF = 30 cm. Chu vi △ABC bằng:",opts:["15 cm","30 cm","60 cm","120 cm"],ans:0},
  {id:120,type:"quick",topic:"L8",q:"Tam giác vuông tại B, AB = 9, BC = 12. Cạnh huyền AC bằng:",opts:["13","14","15","21"],ans:2},
];

const DECKS: number[][] = [
  [1,31,51,66,81, 5,32,52,67,82, 7,33,53,68,83, 13,36,57,69,85, 19,41,60,71,86],
  [2,34,54,70,84, 6,35,55,72,87, 8,37,56,73,88, 14,38,58,74,89, 20,42,61,75,90],
  [3,39,59,76,91, 9,40,62,77,92, 10,43,63,78,93, 15,44,64,79,94, 21,45,65,80,95],
  [4,46,51,66,96, 11,47,52,67,97, 16,48,53,68,98, 22,49,57,69,99, 23,50,60,71,100],
  [24,103,61,105,106, 25,104,62,107,110, 26,108,63,109,81, 27,112,64,117,82, 28,116,65,119,83],
  [29,113,58,115,114, 30,111,59,120,84, 12,101,54,118,85, 17,102,55,76,86, 18,37,56,80,87],
];

const TYPE_CFG = {
  mc:      {label:"Trắc nghiệm", emoji:"🔵", bg:"rgba(59, 130, 246, 0.1)", border:"rgba(59, 130, 246, 0.3)", text:"#60a5fa"},
  tf:      {label:"Đúng / Sai",  emoji:"🟣", bg:"rgba(168, 85, 247, 0.1)", border:"rgba(168, 85, 247, 0.3)", text:"#c084fc"},
  fill:    {label:"Điền khuyết", emoji:"🟢", bg:"rgba(34, 197, 94, 0.1)", border:"rgba(34, 197, 94, 0.3)", text:"#4ade80"},
  formula: {label:"Công thức",   emoji:"🟡", bg:"rgba(234, 179, 8, 0.1)", border:"rgba(234, 179, 8, 0.3)", text:"#facc15"},
  quick:   {label:"Tính nhanh",  emoji:"🔴", bg:"rgba(239, 68, 68, 0.1)", border:"rgba(239, 68, 68, 0.3)", text:"#f87171"},
};

function shuffle<T>(arr: T[]): T[] { return [...arr].sort(() => Math.random() - 0.5); }

export default function LuyenLyThuyet() {
  const [screen, setScreen] = useState<"home" | "quiz" | "result">("home");
  const [mode, setMode] = useState<{type: "deck" | "random" | "retry"; deckIdx?: number} | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [wrongIds, setWrongIds] = useState<Set<number>>(new Set());

  const startDeck = useCallback((deckIdx: number) => {
    const ids = [...new Set(DECKS[deckIdx])];
    const qs = ids.map(id => BANK.find(q => q.id === id)).filter((q): q is Question => !!q);
    setQuestions(qs);
    setAnswers({});
    setCurrent(0);
    setShowAnswer(false);
    setMode({type:"deck", deckIdx});
    setScreen("quiz");
  }, []);

  const startRandom = useCallback(() => {
    const qs = shuffle(BANK).slice(0, 20);
    setQuestions(qs);
    setAnswers({});
    setCurrent(0);
    setShowAnswer(false);
    setMode({type:"random"});
    setScreen("quiz");
  }, []);

  const startRetry = useCallback(() => {
    const qs = BANK.filter(q => wrongIds.has(q.id));
    if (!qs.length) return;
    setQuestions(shuffle(qs));
    setAnswers({});
    setCurrent(0);
    setShowAnswer(false);
    setMode({type:"retry"});
    setScreen("quiz");
  }, [wrongIds]);

  const choose = useCallback((qi: number) => {
    if (showAnswer) return;
    const q = questions[current];
    setAnswers(prev => ({ ...prev, [q.id]: qi }));
    setShowAnswer(true);
  }, [showAnswer, questions, current]);

  const chooseTF = useCallback((val: boolean) => {
    if (showAnswer) return;
    const q = questions[current];
    const qi = val ? 0 : 1; // 0 = Đúng, 1 = Sai
    setAnswers(prev => ({ ...prev, [q.id]: qi }));
    setShowAnswer(true);
  }, [showAnswer, questions, current]);

  const next = useCallback(() => {
    if (current < questions.length - 1) {
      setCurrent(i => i + 1);
      setShowAnswer(false);
    } else {
      // Calculate scores
      const wrong = new Set<number>();
      questions.forEach(q => {
        const chosen = answers[q.id];
        let isCorrect;
        if (q.type === "tf") {
          isCorrect = (chosen === 0) === q.ans;
        } else {
          isCorrect = chosen === q.ans;
        }
        if (!isCorrect) wrong.add(q.id);
      });
      setWrongIds(wrong);
      setScreen("result");
    }
  }, [current, questions, answers]);

  const score = questions.filter(q => {
    const chosen = answers[q.id];
    if (chosen === undefined) return false;
    if (q.type === "tf") return (chosen === 0) === q.ans;
    return chosen === q.ans;
  }).length;

  const q = questions[current];
  const cfg = q ? TYPE_CFG[q.type] : null;

  // ── HOME SCREEN ──
  if (screen === "home") return (
    <div className="flex flex-col gap-10">
      {/* Hero Header */}
      <div className="p-8 rounded-3xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto gap-4">
          <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            <Brain className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
            Luyện Lý Thuyết Toán Hình
          </h1>
          <p className="text-slate-400 text-sm">
            120 câu hỏi trắc nghiệm chia làm 5 dạng bài ôn tập. Hỗ trợ đầy đủ khối lớp 6, 7 và 8 bám sát chương trình chuẩn.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {Object.entries(TYPE_CFG).map(([k, v]) => (
              <span 
                key={k} 
                style={{ backgroundColor: v.bg, borderColor: v.border, color: v.text }}
                className="text-xs px-3 py-1 rounded-full border font-semibold"
              >
                {v.emoji} {v.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Select Deck Grid */}
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold text-slate-300 flex items-center gap-2 px-1">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          Danh sách đề ôn luyện
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DECKS.map((_, i) => (
            <button
              key={i}
              onClick={() => startDeck(i)}
              className="group relative flex flex-col p-6 rounded-2xl border border-slate-900 bg-slate-950/40 hover:border-slate-800/80 hover:bg-slate-900/10 transition-all duration-300 shadow-lg text-left cursor-pointer"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  25 câu hỏi
                </span>
                <span className="text-slate-500 group-hover:text-indigo-400 transition-colors text-xs font-semibold">
                  Bắt đầu &rarr;
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-200 mb-1 group-hover:text-white">
                📄 Đề Số {i + 1}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Bài ôn tập lý thuyết tổng hợp dạng đề số {i + 1}.
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Specialty Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto w-full">
        <button
          onClick={startRandom}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 active:scale-98 transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          🎲 Luyện ngẫu nhiên 20 câu
        </button>
        
        {wrongIds.size > 0 && (
          <button
            onClick={startRetry}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-bold text-sm shadow-lg shadow-rose-500/20 active:scale-98 transition-all cursor-pointer animate-pulse"
          >
            <RotateCcw className="w-4 h-4" />
            🔄 Ôn {wrongIds.size} câu làm sai
          </button>
        )}
      </div>
    </div>
  );

  // ── QUIZ SCREEN ──
  if (screen === "quiz" && q && cfg) {
    const chosen = answers[q.id];
    const isCorrect = q.type === "tf" ? (chosen === 0) === q.ans : chosen === q.ans;
    const progress = (current + 1) / questions.length;

    return (
      <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setScreen("home")}
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            &larr; Về trang chủ
          </button>
          
          <span className="text-xs font-bold text-slate-400">
            Câu {current + 1} / {questions.length}
          </span>
          
          <span 
            style={{ backgroundColor: cfg.bg, borderColor: cfg.border, color: cfg.text }}
            className="text-xs px-3 py-1 rounded-full border font-bold"
          >
            {cfg.emoji} {cfg.label}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80">
          <div 
            style={{ width: `${progress * 100}%` }}
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300"
          />
        </div>

        {/* Question Panel */}
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm shadow-xl">
          <div className="text-slate-100 text-base md:text-lg font-bold leading-relaxed">
            <MathText text={q.q} />
          </div>
        </div>

        {/* Answers Interface */}
        {q.type === "tf" ? (
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "✅ Đúng", index: 0, expected: q.ans === true },
              { label: "❌ Sai", index: 1, expected: q.ans === false },
            ].map((opt) => {
              const isChosen = chosen === opt.index;
              let styleClass = "border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700";
              
              if (showAnswer) {
                if (opt.expected) {
                  styleClass = "border-emerald-500/50 bg-emerald-500/10 text-emerald-400";
                } else if (isChosen) {
                  styleClass = "border-rose-500/50 bg-rose-500/10 text-rose-400";
                }
              }

              return (
                <button
                  key={opt.index}
                  disabled={showAnswer}
                  onClick={() => chooseTF(opt.index === 0)}
                  className={`px-6 py-4 rounded-xl border text-sm font-bold transition-all active:scale-98 ${styleClass} ${!showAnswer && 'cursor-pointer'}`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {q.opts?.map((opt, i) => {
              const isThisCorrect = i === q.ans;
              const isChosen = chosen === i;
              let styleClass = "border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-750";
              
              if (showAnswer) {
                if (isThisCorrect) {
                  styleClass = "border-emerald-500/50 bg-emerald-500/10 text-emerald-400";
                } else if (isChosen) {
                  styleClass = "border-rose-500/50 bg-rose-500/10 text-rose-400";
                }
              }

              const prefix = ["A", "B", "C", "D"][i];

              return (
                <button
                  key={i}
                  disabled={showAnswer}
                  onClick={() => choose(i)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl border text-left text-sm font-medium transition-all ${styleClass} ${!showAnswer && 'cursor-pointer hover:bg-slate-900/10'}`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-xs shrink-0 ${
                    showAnswer 
                      ? (isThisCorrect ? 'bg-emerald-500 text-white' : isChosen ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-400')
                      : 'bg-slate-800 text-slate-400 group-hover:text-white'
                  }`}>
                    {showAnswer ? (isThisCorrect ? '✓' : isChosen ? '✗' : prefix) : prefix}
                  </span>
                  <div className="flex-1">
                    <MathText text={opt} />
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Feedback block */}
        {showAnswer && (
          <div className={`p-4 rounded-xl border flex flex-col gap-2 ${
            isCorrect 
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
              : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
          }`}>
            <div className="font-extrabold text-sm flex items-center gap-1.5">
              {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
              {isCorrect ? "🎉 Chính xác!" : "❌ Chưa chính xác!"}
            </div>
            
            {!isCorrect && (
              <div className="text-xs text-slate-300">
                <strong>Đáp án đúng:</strong> {q.type === "tf" ? (q.ans ? "Đúng" : "Sai") : q.opts?.[q.ans as number]}
              </div>
            )}

            {q.note && (
              <div className="text-xs text-slate-400 border-t border-slate-800/80 pt-2 mt-1">
                💡 {q.note}
              </div>
            )}
          </div>
        )}

        {/* Next Question / Finish Button */}
        {showAnswer && (
          <button
            onClick={next}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 active:scale-98 transition-all cursor-pointer"
          >
            {current < questions.length - 1 ? (
              <>
                Câu tiếp theo
                <ChevronRight className="w-4 h-4" />
              </>
            ) : (
              "Xem kết quả ôn tập 🏁"
            )}
          </button>
        )}
      </div>
    );
  }

  // ── RESULT SCREEN ──
  if (screen === "result") {
    const pct = Math.round((score / questions.length) * 100);
    const medal = pct >= 90 ? "🏆" : pct >= 70 ? "🥈" : pct >= 50 ? "🥉" : "📖";
    const msg = pct >= 90 ? "Xuất sắc! Bạn nhớ lý thuyết rất tốt!" : pct >= 70 ? "Khá tốt! Hãy ôn lại các câu sai để ghi nhớ lâu hơn." : pct >= 50 ? "Cần cố gắng thêm! Hãy luyện tập nhiều lần." : "Hãy đọc kỹ lại lý thuyết và làm lại từ đầu nhé!";

    return (
      <div className="max-w-md mx-auto w-full">
        <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-md shadow-2xl flex flex-col items-center text-center gap-6">
          <div className="text-5xl animate-bounce">{medal}</div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-100 mb-1">Kết quả ôn tập</h2>
            <p className="text-slate-400 text-xs leading-relaxed">{msg}</p>
          </div>

          {/* Big Score Panel */}
          <div className="w-full p-6 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
            <div className="text-4xl md:text-5xl font-black text-indigo-300">
              {score} / {questions.length}
            </div>
            <div className="text-xs font-bold text-indigo-400 mt-1 uppercase tracking-wider">
              Chính xác {pct}%
            </div>
          </div>

          {/* Detailed Statistics */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
              <div className="text-xl font-extrabold text-emerald-400">{score}</div>
              <div className="text-[10px] font-bold text-emerald-500 uppercase">Đúng ✓</div>
            </div>
            
            <div className="p-3.5 rounded-xl bg-rose-500/5 border border-rose-500/10">
              <div className="text-xl font-extrabold text-rose-400">{questions.length - score}</div>
              <div className="text-[10px] font-bold text-rose-500 uppercase">Sai ✗</div>
            </div>
          </div>

          {/* List of wrong questions to review */}
          {wrongIds.size > 0 && (
            <div className="w-full text-left p-4 rounded-xl bg-rose-500/5 border border-rose-500/10 flex flex-col gap-2">
              <div className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Câu hỏi cần ghi nhớ lại:
              </div>
              <div className="max-h-40 overflow-y-auto flex flex-col gap-2 pr-1 text-xs text-slate-300 leading-relaxed border-t border-rose-500/10 pt-2 mt-1">
                {questions.filter(q => wrongIds.has(q.id)).map((q, idx) => (
                  <div key={q.id} className="pb-1.5 border-b border-slate-900/60 last:border-0 last:pb-0 flex items-start gap-2">
                    <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-slate-900 border border-slate-800 text-slate-400">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <MathText text={q.q} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-col gap-2.5 w-full">
            {wrongIds.size > 0 && (
              <button
                onClick={startRetry}
                className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-bold text-xs shadow-lg active:scale-98 transition-all cursor-pointer"
              >
                🔄 Ôn tập lại các câu làm sai
              </button>
            )}
            
            <button
              onClick={() => { mode?.type === "deck" ? startDeck(mode.deckIdx as number) : startRandom(); }}
              className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-xs shadow-lg active:scale-98 transition-all cursor-pointer"
            >
              ↺ Làm lại bài kiểm tra này
            </button>
            
            <button
              onClick={() => setScreen("home")}
              className="w-full px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-bold text-xs transition-all cursor-pointer"
            >
              🏠 Quay lại danh sách đề
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time
import mysql.connector
from unidecode import unidecode

connection  = mysql.connector.connect(
    host='localhost',
    database='phim24h',
    user='phim24h',
    password='phim24h'
)
if connection.is_connected():
    db_Info = connection.get_server_info()
    print("Connected to MySQL Server version ", db_Info)

cursor = connection.cursor()



def check_the_loai(v_string):
    list_id=[]
    if(v_string.find("Cổ Trang - Thần Thoại")>-1):
        list_id.append(7)
        list_id.append(16)
    if(v_string.find("Võ Thuật - Kiếm Hiệp")>-1):
        list_id.append(2)
    if(v_string.find("Phiêu Lưu - Hành Động")>-1):
        list_id.append(1)
        list_id.append(8)
    if(v_string.find("Tâm Lý - Tình Cảm")>-1):
        list_id.append(3)
        list_id.append(9)
    if(v_string.find("Hoạt Hình")>-1):
        list_id.append(4)
        list_id.append(20)
    if(v_string.find("Khoa Học - Viễn Tưởng")>-1):
        list_id.append(6)
        list_id.append(10)
    if(v_string.find("Hình Sự - Chiến Tranh")>-1):
        list_id.append(11)
        list_id.append(13)
    if(v_string.find("Tài Liệu - Khám Phá")>-1):
        list_id.append(23)
        list_id.append(24)
    if(v_string.find("Văn Hóa - Tâm Linh")>-1):
        list_id.append(12)
    if(v_string.find("Hài Hước")>-1):
        list_id.append(5)
    if(v_string.find("Thể Thao - Âm Nhạc")>-1):
        list_id.append(14)
        list_id.append(15)
    if(v_string.find("Kinh Dị - Ma")>-1):
        list_id.append(12)
    if(v_string.find("Gia Đình - Học Đường")>-1):
        list_id.append(26)
    if(v_string.find("TV Show")>-1):
        list_id.append(17)
        list_id.append(18)
    if(v_string.find("Phim Chiếu Rạp")>-1):
        list_id.append(19)
    if(v_string.find("Thuyết Minh")>-1):
        list_id.append(22)
    if(v_string.find("Bí Ẩn - Siêu Nhiên")>-1):
        list_id.append(27)
    return list_id

def check_country(v_string):
    if(v_string.find("Việt Nam")>-1):
        return 9 
    if(v_string.find("Trung Quốc")>-1):
        return 1
    if(v_string.find("Hàn Quốc")>-1):
        return 2
    if(v_string.find("Thái Lan")>-1):
        return 5
    if(v_string.find("Hồng Kông")>-1):
        return 8
    if(v_string.find("Âu - Mỹ")>-1):
        return 4
    if(v_string.find("Đài Loan")>-1):
        return 6
    if(v_string.find("Nhật Bản")>-1):
        return 3
    if(v_string.find("Ấn Độ")>-1):
        return 10
    if(v_string.find("Canada")>-1):
        return 11
    if(v_string.find("Quốc gia khác")>-1):
        return 7
    if(v_string.find("Khác")>-1):
        return 7
    

if __name__ == "__main__":
    lines_phim_le=[]
    with open("phim-bo","r",encoding="utf8") as tf:
        lines_phim_le= tf.readlines()
    with open("phim-bo-backup","r+",encoding="utf8") as tf1:
        lines_phim_le_bk= tf1.readlines()
    options = Options()
    # Working with the 'add_argument' Method to modify Driver Default Notification
    options.add_argument('--disable-notifications')
    browser = webdriver.Chrome(chrome_options=options)
    browser.maximize_window()
    for link in lines_phim_le:
        if link in lines_phim_le_bk:
            continue
        _link_background=""
        _name=""
        _content=""
        _year=""
        _director=""
        _cast=""
        _link=""
        _id_typephim=2
        _id_quocgia=""
        _id_the_loai=[]
        _time=""
        _timestamp = int(time.time())
        browser.get(link.replace('\n',""))
        body=browser.find_element_by_class_name("blockbody")
        info = body.find_element_by_class_name("info").find_element_by_class_name("poster")
        _link_background= info.find_element_by_class_name("hidden").get_attribute("src")
        text = body.find_element_by_class_name("info").find_element_by_class_name("text")
        _name= text.find_element_by_tag_name("h1").text.title()
        _link=unidecode(_name).replace(" ","-").lower()
        info = text.find_element_by_class_name("dinfo").text.replace(":\n",":")
        list_info = info.split("\n")
        for ltinfo in list_info:
            if(ltinfo.find("Đạo diễn:")>-1):
                _director=ltinfo.replace("Đạo diễn:","")
            if(ltinfo.find("Thời lượng:")>-1):
                _time=ltinfo.replace("Thời lượng:","")
            if(ltinfo.find("Năm sản xuất:")>-1):
                _year = ltinfo.replace("Năm sản xuất:","")
            if(ltinfo.find("Quốc gia:")>-1):
                _id_quocgia=check_country(ltinfo.replace("Quốc gia:",""))
            if(ltinfo.find("Thể loại:")>-1):
                _id_the_loai=check_the_loai(ltinfo.replace("Thể loại:",""))
            if(ltinfo.find("Diễn viên:")>-1):
                _cast=ltinfo.replace("Diễn viên:","")
        _content = body.find_element_by_class_name("tab").text
        check_insert = ("SELECT * FROM tb_filmintro " "WHERE link=%s")
        insert = ("INSERT INTO tb_filmintro (year, director, cast, content, link,link_background,name,id_typephim,id_quocgia,time,timestamp) VALUES (%s, %s, %s, %s, %s,%s, %s, %s, %s, %s,%s)")
        data = (_year,_director, _cast, _content, _link,_link_background,_name,_id_typephim,_id_quocgia,_time,_timestamp)
        cursor.execute(check_insert,(_link,))
        if(len(cursor.fetchall()) ==0):
            #insert
            cursor.execute(insert, data)
            connection.commit()
            time.sleep(2)
        #tb_theloai_info
        check_insert = ("SELECT * FROM tb_theloai_intro " "WHERE root_link=%s")
        cursor.execute(check_insert,(_link,))
        if(len(cursor.fetchall()) ==0):
            for v_id_theloai in _id_the_loai:
                time.sleep(2)
                tb_insert = ("INSERT INTO tb_theloai_intro (root_link, id_theloai) VALUES (%s, %s)")
                tb_data = (_link,v_id_theloai,)
                cursor.execute(tb_insert,tb_data)
                connection.commit()
        with open("phim-bo-backup","a+",encoding="utf8") as tf2:
            tf2.write(link)
        time.sleep(2)

            
        # list_url=body.find_elements_by_class_name("item")
        # for item in list_url:
        #     link = item.find_element_by_tag_name("a").get_attribute("href")+"\n"
        #     if link not in lines_phim_le:
    
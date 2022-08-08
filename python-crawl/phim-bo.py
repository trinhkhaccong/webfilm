from tkinter.filedialog import Open
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import requests
import time
import random
import json
import configparser
from datetime import date
import os

if __name__ == "__main__":
    lines_phim_le=[]
    with open("phim-bo","a+",encoding="utf8") as tf:
        lines_phim_le= tf.readlines()
    options = Options()
    # Working with the 'add_argument' Method to modify Driver Default Notification
    options.add_argument('--disable-notifications')
    browser = webdriver.Chrome(chrome_options=options)
    browser.maximize_window()
    lines_phim_le_new=[]
    for index in range(219):
        browser.get("https://motchill.net/phim-bo/"+str(index+1))
        body=browser.find_element_by_class_name("list-films")
        list_url=body.find_elements_by_class_name("item")
        for item in list_url:
            link = item.find_element_by_tag_name("a").get_attribute("href")+"\n"
            if link not in lines_phim_le:
                lines_phim_le_new.append(link)
    for link in set(lines_phim_le_new):
        with open("phim-bo_new","a+",encoding="utf8") as tf2:
            tf2.write(link)
    
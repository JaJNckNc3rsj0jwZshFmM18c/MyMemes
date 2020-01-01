import re 



def transforming_date(dates):
    New_last_time = re.split("\s",str(dates)) 
    print(New_last_time)
        #Checking_IP.Last_time_watched
            
    Last_time = New_last_time[1]

    Last_time3 = re.sub("a.m.","",Last_time)

    Last_time2 = re.split("\:", Last_time3)

    Last_time4A =   int(Last_time2[0])

    Last_time4B = int(Last_time2[1])  

    Final_Variable = [Last_time4A,Last_time4B]

    return Final_Variable


# Doanh thu theo năm
Doanh thu = SUM (job  x  giá tiền where Job `finishDate` in [startYear, endYear]
Lợi nhuận = Doanh thu - SUM (Employee Paid) - (KPI of Month)


## Store procedure
DROP PROCEDURE  Report_byYear;
DELIMITER //
CREATE PROCEDURE Report_byYear(
    year INT
)
BEGIN
    SELECT * from `jobs` 
    WHERE YEAR(createdAt) = year;
END //
DELIMITER ;

CALL Report_byYear(2021)


TODO
- Add `cost` field into `job` table
- Employee Paid = cost * (retoucher + leader + blender)/100
- KPI paid = `userterm`.kpi_paid if (total > 15k)
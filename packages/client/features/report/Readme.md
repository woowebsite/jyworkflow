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
    SELECT  
        YEAR(j.finishDate) AS 'year',
        SUM(jm.value) AS 'revenue',
        (SUM(jmp.value) - SUM(jm.value)) AS 'profit'
    FROM `jobs` j
        INNER JOIN `jobmeta` jm ON jm.job_id = j.id 
        AND jm.key='cost'
        INNER JOIN `jobmeta` jmp ON jmp.job_id = j.id 
        AND jmp.key='paid'
        GROUP BY YEAR(j.finishDate);
END //
DELIMITER ;

CALL Report_byYear(2021)


TODO
- Update `cost` by job type when create job
- Update finishDate of `job`
- `jobmeta` Employee Paid = cost * (retoucher + leader + blender)/100
- KPI paid = `userterm`.kpi_paid if (total > 15k)
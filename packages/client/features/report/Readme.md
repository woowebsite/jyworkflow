# Doanh thu theo năm
Doanh thu = SUM (job  x  giá tiền) where Job `finishDate` in [startYear, endYear]
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
    WHERE YEAR(j.finishDate) BETWEEN year -3 and year + 3
    GROUP BY YEAR(j.finishDate);
END //
DELIMITER ;

CALL Report_byYear(2021)

--------------------------------------------------------
DROP PROCEDURE  Report_byMonth;
DELIMITER //
CREATE PROCEDURE Report_byMonth(
    month INT
)
BEGIN
    SELECT  
        MONTH(j.finishDate) AS 'month',
        SUM(jm.value) AS 'revenue',
        (SUM(jmp.value) - SUM(jm.value)) AS 'profit'
    FROM `jobs` j
        LEFT JOIN `jobmeta` jm ON jm.job_id = j.id 
        AND jm.key='cost'
        LEFT JOIN `jobmeta` jmp ON jmp.job_id = j.id 
        AND jmp.key='paid'
    WHERE MONTH(j.finishDate) BETWEEN 1 AND 12
        AND YEAR(j.finishDate) = year
    GROUP BY MONTH(j.finishDate);
END //
DELIMITER ;

CALL Report_byMonth(2022)

--------------------------------------------------------
DROP PROCEDURE  Report_byDay;
DELIMITER //
CREATE PROCEDURE Report_byDay(
    startDate VARCHAR,
    endDate VARCHAR
)
BEGIN
   SELECT  
        j.finishDate AS 'day',
        SUM(jm.value) AS 'revenue',
        (SUM(jmp.value) - SUM(jm.value)) AS 'profit'
    FROM `jobs` j
        LEFT JOIN `jobmeta` jm ON jm.job_id = j.id 
        AND jm.key='cost'
        LEFT JOIN `jobmeta` jmp ON jmp.job_id = j.id 
        AND jmp.key='paid'
    WHERE j.finishDate BETWEEN startDate AND endDate
    GROUP BY j.finishDate;
END //
DELIMITER ;

CALL Report_byDay('2022-01-01', '2022-04-01')


TODO
- Update `cost` by job type when create job
- Update finishDate of `job`
- `jobmeta` Employee Paid = cost * (retoucher + leader + blender)/100
- KPI paid = `userterm`.kpi_paid if (total > 15k)
select  
    producto,
    sum(cantidad * precio) as total_price
from 
    ventas
where 
    fecha_venta >= date_sub( now(), interval 3 month)
group by 
    producto 
order by 
    total_price
limit 1 

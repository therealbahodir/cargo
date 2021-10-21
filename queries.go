package main 


const QUERY_GET = `select * from(
					select 
						row_number() over (
							order by o.order_id desc
						) as rn,
						o.order_id,o.isDelivered
					from orders as o
					order by o.order_id desc
					) smth
				
			

`

const QUERY_UPDATE_COMPLETED = `
					update orders set isdelivered = $1 where order_id = $2
`

const QUERY_GET_BY_ID = `
					select 
						i.name, i.quantity,
						r.firstname || ' ' || r.lastname as ReceiverFullname, r.passport, r.phone, r.address, r.city,
						s.firstname || ' ' || s.lastname as SenderFullname, s.phone, s.email, s.address, s.city, s.postcode,
 						o.order_id, o.comment, o.value, o.isdelivered
 					from items as i
 					join orders as o using(order_id)
 					join receivers as r on r.receiver_id = o.receiver_id
 					join senders as s on s.sender_id = o.sender_id
 					where i.order_id = $1;

`

const QUERY_POST_SENDER = `
					insert into senders (firstname, lastname, phone, email, address, city, postcode) values ($1, $2, $3, $4, $5, $6, $7);		
`

const QUERY_POST_RECEIVER = `
					insert into receivers (firstname, lastname, passport, phone, address, city) values ($1, $2, $3, $4, $5, $6);
`

const QUERY_POST_ORDER = `
					insert into orders (sender_id, receiver_id, comment, value) values ((select max(sender_id) from senders), (select max(receiver_id) from receivers), $1, $2);
`

const QUERY_POST_MAIN = `
					insert into items(name,quantity,order_id) values ($1, $2 ,(select max(order_id) from orders))
`


const QUERY_DELETE = `
					delete from items where order_id = $1
`
const QUERY_DELETE1 = `
					delete from orders where order_id = $1
`






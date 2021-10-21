create table senders(
	sender_id serial not null primary key,
	firstname varchar(64) not null,
	lastname varchar(64) not null, 
	phone varchar(25) not null,
	email varchar(254) not null,
	address varchar(256),
	city varchar(128),
	postcode varchar(10)
);

create table receivers(
	receiver_id serial not null primary key,
	firstname varchar(64) not null,
	lastname varchar(64) not null, 
	passport varchar(10),
	phone varchar(15),
	address varchar(256) not null,
	city varchar(128)
);

create table items(
	item_id serial not null primary key,
	name varchar(256) not null,
	quantity int not null,
	order_id int not null references orders(order_id)
);

create table orders(
	order_id serial not null primary key,
	ordered_at timestamp default current_timestamp,
	sender_id int not null references senders(sender_id),
	receiver_id int not null references receivers(receiver_id),
	comment text,
	isDelivered bool default false,
	value int
);




insert into senders (firstname, lastname, phone, email, address, city, postcode) values ('Elyorjon','Toxtashev','+998905554466','toxtashev@mail.ru','Julia 8','Manchester','0064');

insert into receivers (firstname, lastname, passport, phone, address, city) values ('Javlon','Jorabekov','BB1234567','+998946803533','Bekobod','Toshkent');

insert into orders (sender_id, receiver_id, comment) values (1,1, 'asap');

insert into items(name,quantity,order_id) values ('Iphone 13',2,1);
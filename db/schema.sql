CREAT DATABASE burger_db;
use burger_db;

create table burgers (
	id int not null auto_increment,
	burger_name varchar(50),
	devoured boolean,
	date timestamp,
	PRIMARY KEY (id)
);

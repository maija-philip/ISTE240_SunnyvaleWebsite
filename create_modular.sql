-- ISTE 230
-- Modified Fall 2020 October 22


DROP table IF EXISTS  modularSite; 

CREATE TABLE modularSite (
   ID smallint UNSIGNED ZEROFILL PRIMARY KEY AUTO_INCREMENT,
   page varchar(14),
   content mediumtext,
   CSS_Internal mediumtext,
   AbsoluteLinkPicture  varchar(200) DEFAULT "http://",
   AbsoluteLinkPicture2 varchar(200) DEFAULT "http://"
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 

INSERT INTO modularSite(page,content,CSS_Internal,AbsoluteLinkPicture)
  VALUES("home","<h2>This site is about fishing</h2>
<p>Data coming from table moduleSite</p>
<p>Living in upstate NY provides excellent fishing locations - Fishing in Florida in the summer is also fantastic</p>",
"","http://solace.ist.rit.edu/~jrhicsa/240/modularsitedone/assets/img/red_devel_bait.png");


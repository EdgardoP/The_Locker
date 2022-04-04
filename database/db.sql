CREATE DATABASE  IF NOT EXISTS `the_locker`
USE `the_locker`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: the_locker
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bitacora`
--

DROP TABLE IF EXISTS `bitacora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bitacora` (
  `idBitacora` int NOT NULL AUTO_INCREMENT,
  `accionRealizada` varchar(50) NOT NULL,
  `moduloAfectado` varchar(50) NOT NULL,
  `fechaBitacora` date NOT NULL,
  `fkEmailUsuario` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idBitacora`),
  KEY `fkEmailUsuario_idx` (`fkEmailUsuario`),
  CONSTRAINT `fkEmailUsuario` FOREIGN KEY (`fkEmailUsuario`) REFERENCES `usuario` (`emailUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bitacora`
--

LOCK TABLES `bitacora` WRITE;
/*!40000 ALTER TABLE `bitacora` DISABLE KEYS */;
INSERT INTO `bitacora` VALUES (1,'Eliminar','Producto','2022-03-04','edgardoportillo05@gmail.com'),(2,'Guardar','Producto','2022-04-03','admin'),(3,'Actualizar','Producto','2022-04-03','admin'),(4,'Guardar','Producto','2022-04-03','admin'),(5,'Actualizar','Producto','2022-04-03','admin'),(6,'Actualizar','Producto','2022-04-03','admin'),(7,'Actualizar','Producto','2022-04-03','admin'),(8,'Eliminar','Producto','2022-04-03','admin'),(9,'Cambio Estado','Producto','2022-04-03','admin'),(10,'Cambio Estado','Producto','2022-04-03','admin'),(11,'Guardar','Usuario','2022-04-03','admin'),(12,'Actualizar','Usuario','2022-04-03','admin'),(13,'Eliminar','Usuario','2022-04-03','admin'),(14,'Eliminar','Usuario','2022-04-03','admin'),(15,'Actualizar','Producto','2022-04-03','admin'),(16,'Cambio Estado','Producto','2022-04-03','admin');
/*!40000 ALTER TABLE `bitacora` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrito` (
  `idcarrito` int NOT NULL AUTO_INCREMENT,
  `fkIdProducto` int NOT NULL,
  `cantidadProducto` int NOT NULL,
  `estadoCarrito` varchar(9) NOT NULL,
  `emailUsuario` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idcarrito`),
  KEY `fkIdProducto_idx` (`fkIdProducto`),
  KEY `emailUsuario_idx` (`emailUsuario`),
  CONSTRAINT `emailUsuario` FOREIGN KEY (`emailUsuario`) REFERENCES `usuario` (`emailUsuario`),
  CONSTRAINT `fkIdProducto` FOREIGN KEY (`fkIdProducto`) REFERENCES `producto` (`idProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
INSERT INTO `carrito` VALUES (11,2,1,'pagado','edgardoportillo05@gmail.com'),(12,3,2,'pagado','edgardoportillo05@gmail.com'),(13,4,5,'pagado','edgardoportillo05@gmail.com'),(14,6,3,'pagado','edgardoportillo05@gmail.com'),(15,2,2,'pagado','edgardoportillo05@gmail.com'),(16,3,3,'pagado','edgardoportillo05@gmail.com'),(17,3,2,'pagado','edgardoportillo05@gmail.com'),(18,4,2,'pagado','edgardoportillo05@gmail.com'),(19,5,6,'pagado','edgardoportillo05@gmail.com'),(20,3,1,'reservado','admin'),(21,2,4,'pagado','edgardoportillo05@gmail.com'),(22,4,9,'pagado','edgardoportillo05@gmail.com'),(23,8,8,'pagado','edgardoportillo05@gmail.com'),(24,7,12,'pagado','edgardoportillo05@gmail.com'),(25,3,6,'reservado','edgardoportillo05@gmail.com');
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `idProducto` int NOT NULL AUTO_INCREMENT,
  `nombreProducto` varchar(20) NOT NULL,
  `fkIdproveedor` varchar(15) NOT NULL,
  `descripcionProducto` varchar(50) NOT NULL,
  `cantProducto` int NOT NULL,
  `precioProducto` double NOT NULL,
  `imagenProducto` varchar(150) NOT NULL,
  `clasificacionProducto` varchar(10) NOT NULL,
  `tallaProducto` varchar(2) NOT NULL,
  `estadoCatalogo` varchar(8) NOT NULL,
  PRIMARY KEY (`idProducto`),
  KEY `fkIdProveedor_idx` (`fkIdproveedor`),
  CONSTRAINT `fkIdProveedor` FOREIGN KEY (`fkIdproveedor`) REFERENCES `proveedor` (`idProveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (2,'Camisa Tropical','041231312','Camisa temporada de verano.',300,7002,'https://img.ltwebstatic.com/images3_pi/2020/12/29/16092099328574b448ae91c646e0e0392c7cc167bc_thumbnail_405x552.webp','Hombre','XL','Visible'),(3,'Blusa','041231312','Blusa veraniega',200,1000,'https://img.ltwebstatic.com/images3_pi/2021/12/15/16395366595278682cbbedecab7de796b0af47e656_thumbnail_405x552.webp','Hombre','S','Oculto'),(4,'Camisa Tropical','041231312','Vestido claro',200,2000,'https://img.ltwebstatic.com/images3_pi/2021/03/22/16163903273cbba792d24fcf55d713efc6bf562d85_thumbnail_405x552.webp','Hombre','L','Visible'),(5,'Camisa Tropical','041231312','Vestido claro',200,2,'https://img.ltwebstatic.com/images3_pi/2021/03/22/16163903273cbba792d24fcf55d713efc6bf562d85_thumbnail_405x552.webp','Mujer','L','Visible'),(6,'Camisa Tropical','041231312','Vestido claro',200,2000,'https://img.ltwebstatic.com/images3_pi/2021/08/27/16300527191b7aaba3649be52ee8f37deac095ac8b_thumbnail_405x552.webp','Mujer','L','Oculto'),(7,'Camisa Tropical','041231312','Vestido claro',200,2000,'https://img.ltwebstatic.com/images3_pi/2021/12/01/163836333639a64aa63fee1eecfe21c63b88cf6131_thumbnail_405x552.webp','Mujer','L','Oculto'),(8,'Camisa Tropical','041231312','Vestido claro',200,2000,'https://img.ltwebstatic.com/images3_pi/2021/07/06/16255602189ff4efecc9fbd45ee00b19bba568b984_thumbnail_405x552.webp','Mujer','L','Oculto');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedor`
--

DROP TABLE IF EXISTS `proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedor` (
  `idProveedor` varchar(15) NOT NULL,
  `nombreProveedor` varchar(45) NOT NULL,
  `celProveedor` varchar(45) NOT NULL,
  PRIMARY KEY (`idProveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedor`
--

LOCK TABLES `proveedor` WRITE;
/*!40000 ALTER TABLE `proveedor` DISABLE KEYS */;
INSERT INTO `proveedor` VALUES ('041231312','La Popular','35956535');
/*!40000 ALTER TABLE `proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` varchar(15) NOT NULL,
  `nombreUsuario` varchar(20) NOT NULL,
  `apellidoUsuario` varchar(20) NOT NULL,
  `edadUsuario` int NOT NULL,
  `sexoUsuario` varchar(1) NOT NULL,
  `emailUsuario` varchar(50) NOT NULL,
  `contrasenia` varchar(20) NOT NULL,
  `tipoUsuario` int NOT NULL,
  PRIMARY KEY (`emailUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (' 1  ',' admin ',' admin ',0,'M',' admin ',' admin ',1),(' 4245  ',' Edgardo ',' Portillo ',23,'M',' edgardoportillo05@gmail.com ',' 1234 ',3),('1','admin434','admin',0,'M','admin','admin',1),('2323','admin2','admin',0,'M','admin3','admin',1),('1','admin','admin',11,'H','edaeda','3413',3),('1','admin','admin',11,'M','edaedaasdasdasd','3413dsa',3),('4245','Edgardo','Portillo',23,'M','edgardoportillo05@gmail.com','1234',3),('4245','Edgardo','Portillo',23,'M','edgardoportillo05@gmail.com1','1234',3),('4245','Edgardo','Portillo',23,'M','edgarfsdfsdfdoportillo05@gmail.com','1234',3);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `idVentas` int NOT NULL AUTO_INCREMENT,
  `noTicket` int NOT NULL,
  `fkIdCarrito` int NOT NULL,
  `fechaVenta` date NOT NULL,
  `nombreTarjeta` varchar(25) NOT NULL,
  `noTarjeta` int NOT NULL,
  `nombreCompleto` varchar(45) NOT NULL,
  `direcEnvio` varchar(200) NOT NULL,
  PRIMARY KEY (`idVentas`),
  KEY `fkIdCarrito_idx` (`fkIdCarrito`),
  CONSTRAINT `fkIdCarrito` FOREIGN KEY (`fkIdCarrito`) REFERENCES `carrito` (`idcarrito`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
INSERT INTO `ventas` VALUES (22,165790146,11,'2022-03-29','MasterCard',12345,'Jose Edgardo Portillo Pacheco','Copan'),(23,165790146,12,'2022-03-29','MasterCard',12345,'Jose Edgardo Portillo Pacheco','Copan'),(24,165790146,13,'2022-03-29','MasterCard',12345,'Jose Edgardo Portillo Pacheco','Copan'),(25,165790146,14,'2022-03-29','MasterCard',12345,'Jose Edgardo Portillo Pacheco','Copan'),(26,238360834,15,'2022-03-29','MasterCard',1234,'Jose Edgardo Portillo Pacheco','Copan'),(27,238360834,16,'2022-03-29','MasterCard',1234,'Jose Edgardo Portillo Pacheco','Copan'),(28,286769629,17,'2022-03-29','MasterCard',2345,'Jose Edgardo Portillo Pacheco','Copan'),(29,286769629,18,'2022-03-29','MasterCard',2345,'Jose Edgardo Portillo Pacheco','Copan'),(30,286769629,19,'2022-03-29','MasterCard',2345,'Jose Edgardo Portillo Pacheco','Copan'),(31,292437869,21,'2022-03-29','MasterCard',12345678,'Jose Edgardo Portillo Pacheco','Copan'),(32,292437869,22,'2022-03-29','MasterCard',12345678,'Jose Edgardo Portillo Pacheco','Copan'),(33,292437869,23,'2022-03-29','MasterCard',12345678,'Jose Edgardo Portillo Pacheco','Copan'),(34,292437869,24,'2022-03-29','MasterCard',12345678,'Jose Edgardo Portillo Pacheco','Copan');
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-03 20:54:00

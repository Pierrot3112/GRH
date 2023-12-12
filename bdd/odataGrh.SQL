DROP DATABASE IF EXISTS odataGRH;

CREATE DATABASE IF NOT EXISTS odataGRH;
USE odataGRH;
# -----------------------------------------------------------------------------
#       TABLE : CONGES
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CONGES
 (
   ID_CONGE INTEGER NOT NULL  ,
   ID_EMPLOYE INTEGER NOT NULL  ,
   TYPE_CONGE CHAR(32) NULL  ,
   DATE_DEBUT DATE NULL  ,
   DATE_FIN DATE NULL  ,
   MOTIF CHAR(255) NULL  
   , PRIMARY KEY (ID_CONGE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : RECRUTEMENTS
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS RECRUTEMENTS
 (
   ID_RECRUTEMENT BIGINT(4) NOT NULL  ,
   CANDIDATS CHAR(255) NULL  ,
   ETAPE_DE_PROCESSUS CHAR(255) NULL  ,
   EVALUATEUR CHAR(32) NULL  ,
   STATUT CHAR(32) NULL  
   , PRIMARY KEY (ID_RECRUTEMENT) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : EMPLOYES
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS EMPLOYES
 (
   ID_EMPLOYE INTEGER NOT NULL  ,
   ID_RECRUTEMENT BIGINT(4) NOT NULL  ,
   ID_DEP INTEGER NOT NULL  ,
   ID_POSTE INTEGER NOT NULL  ,
   NOM CHAR(32) NULL  ,
   PRENOM CHAR(50) NULL  ,
   DATE_NAISSANCE DATE NULL  ,
   GENRE CHAR(10) NULL  ,
   NSS BIGINT(10) NULL  ,
   ADRESSE CHAR(32) NULL  ,
   TELEPHONE BIGINT(10) NULL  ,
   MAIL CHAR(255) NULL  ,
   DATE_EMBAUCHE DATE NULL  ,
   SALAIRE BIGINT(10) NULL  
   , PRIMARY KEY (ID_EMPLOYE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : DOSSIER_MEDICALS
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS DOSSIER_MEDICALS
 (
   ID_DOSSIER BIGINT(4) NOT NULL  ,
   ID_EMPLOYE INTEGER NOT NULL  ,
   INFORMATION_MEDICAL CHAR(255) NULL  ,
   DOCUMENT_MEDICAL TEXT NULL  
   , PRIMARY KEY (ID_DOSSIER) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : FORMATIONS
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS FORMATIONS
 (
   ID_FORMATION BIGINT(4) NOT NULL  ,
   ID_EMPLOYE INTEGER NOT NULL  ,
   TITRE_FORMATION CHAR(32) NULL  ,
   DESCRIPTION TEXT NULL  ,
   FORMATEUR CHAR(255) NULL  ,
   DATE_DEBUT DATE NULL  ,
   DATE_FIN DATE NULL  ,
   COUT BIGINT(10) NULL  
   , PRIMARY KEY (ID_FORMATION) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : DEPARTEMENTS
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS DEPARTEMENTS
 (
   ID_DEP INTEGER NOT NULL  ,
   NOM_DEP CHAR(32) NULL  ,
   DESCRIPTION_DEP TEXT NULL  
   , PRIMARY KEY (ID_DEP) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : PAIES
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS PAIES
 (
   ID_PAIE BIGINT(4) NOT NULL  ,
   ID_EMPLOYE INTEGER NOT NULL  ,
   PERIODE CHAR(32) NULL  ,
   SALAIRE_BRUT BIGINT(10) NULL  ,
   DEDUCTION BIGINT(10) NULL  ,
   SALAIRE_NET BIGINT(10) NULL  
   , PRIMARY KEY (ID_PAIE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : POSTES
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS POSTES
 (
   ID_POSTE INTEGER NOT NULL  ,
   TITRE_POSTE CHAR(32) NULL  ,
   DESCRIPTION_POSTE TEXT NULL  ,
   NIVEAU_SALAIRE BIGINT(10) NULL  
   , PRIMARY KEY (ID_POSTE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : EVALUATIONS
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS EVALUATIONS
 (
   ID_EVALUATION INTEGER NOT NULL  ,
   DATE_EVALUATION DATE NULL  ,
   OBJECTIF CHAR(32) NULL  ,
   RESULTAT CHAR(255) NULL  ,
   COMMENGTAIRE_EVALUATEUR TEXT NULL  
   , PRIMARY KEY (ID_EVALUATION) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : ADMETS
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS ADMETS
 (
   ID_EMPLOYE INTEGER NOT NULL  ,
   ID_EVALUATION INTEGER NOT NULL  ,
   DATE_EVALUATION DATE NULL  
   , PRIMARY KEY (ID_EMPLOYE,ID_EVALUATION) 
 ) 
 comment = "";


# -----------------------------------------------------------------------------
#       CREATION DES REFERENCES DE TABLE
# -----------------------------------------------------------------------------


ALTER TABLE CONGES 
  ADD FOREIGN KEY FK_CONGES_EMPLOYES (ID_EMPLOYE)
      REFERENCES EMPLOYES (ID_EMPLOYE) ;


ALTER TABLE EMPLOYES 
  ADD FOREIGN KEY FK_EMPLOYES_RECRUTEMENTS (ID_RECRUTEMENT)
      REFERENCES RECRUTEMENTS (ID_RECRUTEMENT) ;


ALTER TABLE EMPLOYES 
  ADD FOREIGN KEY FK_EMPLOYES_DEPARTEMENTS (ID_DEP)
      REFERENCES DEPARTEMENTS (ID_DEP) ;


ALTER TABLE EMPLOYES 
  ADD FOREIGN KEY FK_EMPLOYES_POSTES (ID_POSTE)
      REFERENCES POSTES (ID_POSTE) ;


ALTER TABLE DOSSIER_MEDICALS 
  ADD FOREIGN KEY FK_DOSSIER_MEDICALS_EMPLOYES (ID_EMPLOYE)
      REFERENCES EMPLOYES (ID_EMPLOYE) ;


ALTER TABLE FORMATIONS 
  ADD FOREIGN KEY FK_FORMATIONS_EMPLOYES (ID_EMPLOYE)
      REFERENCES EMPLOYES (ID_EMPLOYE) ;


ALTER TABLE PAIES 
  ADD FOREIGN KEY FK_PAIES_EMPLOYES (ID_EMPLOYE)
      REFERENCES EMPLOYES (ID_EMPLOYE) ;


ALTER TABLE ADMETS 
  ADD FOREIGN KEY FK_ADMETS_EMPLOYES (ID_EMPLOYE)
      REFERENCES EMPLOYES (ID_EMPLOYE) ;


ALTER TABLE ADMETS 
  ADD FOREIGN KEY FK_ADMETS_EVALUATIONS (ID_EVALUATION)
      REFERENCES EVALUATIONS (ID_EVALUATION) ;


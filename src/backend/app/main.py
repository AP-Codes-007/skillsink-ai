from sqlalchemy import Column, Integer, String, Text, ForeignKey, TIMESTAMP
from sqlalchemy.sql import func
from .database import Base

class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    college = Column(String)
    branch = Column(String)
    year = Column(Integer)


class Employer(Base):
    __tablename__ = "employers"

    id = Column(Integer, primary_key=True)
    company_name = Column(String)
    email = Column(String)
    industry = Column(String)


class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True)
    employer_id = Column(Integer, ForeignKey("employers.id"))
    title = Column(String)
    location = Column(String)
    stipend = Column(Integer)
    description = Column(Text)


class SkillPassport(Base):
    __tablename__ = "skill_passports"

    id = Column(Integer, primary_key=True)
    student_id = Column(Integer, ForeignKey("students.id"))
    overall_score = Column(Integer)
    verified_skills = Column(Text)
    certifications = Column(Text)


class Application(Base):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True)
    student_id = Column(Integer, ForeignKey("students.id"))
    job_id = Column(Integer, ForeignKey("jobs.id"))
    status = Column(String)
    applied_at = Column(TIMESTAMP, server_default=func.now())
    
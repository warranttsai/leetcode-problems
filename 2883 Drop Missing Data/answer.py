import pandas as pd
from constants import test_cases

def dropMissingData(students: pd.DataFrame) -> pd.DataFrame:
    # for _, row in students.iterrows():
    #     if row["name"] == None:
    #         students = students[students['student_id'] != row["student_id"]]

    # return students

    # One line answer with Pandas
    return students.dropna(subset=['student_id', 'name', 'age'])

for case in test_cases:
    students = pd.DataFrame(case)
    print(students)
    cleaned_students = dropMissingData(students)
    print(cleaned_students)
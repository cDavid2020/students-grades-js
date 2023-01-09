# Grades

## Getting Started

Create your `db.json`. Set up `json-server` and `got`. Here's the data from `db.json`:

```json
{
  "grades": [
    {
      "id": 1,
      "name": "Mark West",
      "grades": [
        {
          "id": 1,
          "type": "HW",
          "score": 100
        },
        {
          "id": 2,
          "type": "Quiz",
          "score": 90
        },
        {
          "id": 3,
          "type": "Test",
          "score": 80
        },
        {
          "id": 4,
          "type": "HW",
          "score": 70
        }
      ]
    },
    {
      "id": 2,
      "name": "John Doe",
      "grades": [
        {
          "id": 1,
          "type": "HW",
          "score": 99
        },
        {
          "id": 2,
          "type": "Quiz",
          "score": 91
        },
        {
          "id": 3,
          "type": "Test",
          "score": 83
        },
        {
          "id": 4,
          "type": "HW",
          "score": 74
        }
      ]
    },
    {
      "id": 3,
      "name": "Jane Doe",
      "grades": [
        {
          "id": 1,
          "type": "HW",
          "score": 98
        },
        {
          "id": 2,
          "type": "Quiz",
          "score": 92
        },
        {
          "id": 3,
          "type": "Test",
          "score": 84
        },
        {
          "id": 4,
          "type": "HW",
          "score": 75
        }
      ]
    },
    {
      "id": 4,
      "name": "John Smith",
      "grades": [
        {
          "id": 1,
          "type": "HW",
          "score": 97
        },
        {
          "id": 2,
          "type": "Quiz",
          "score": 93
        },
        {
          "id": 3,
          "type": "Test",
          "score": 85
        },
        {
          "id": 4,
          "type": "HW",
          "score": 76
        }
      ]
    },
    {
      "id": 5,
      "name": "Jane Smith",
      "grades": [
        {
          "id": 1,
          "type": "HW",
          "score": 96
        },
        {
          "id": 2,
          "type": "Quiz",
          "score": 94
        },
        {
          "id": 3,
          "type": "Test",
          "score": 86
        },
        {
          "id": 4,
          "type": "HW",
          "score": 77
        }
      ]
    },
    {
      "id": 6,
      "name": "John West",
      "grades": [
        {
          "id": 1,
          "type": "HW",
          "score": 95
        },
        {
          "id": 2,
          "type": "Quiz",
          "score": 95
        },
        {
          "id": 3,
          "type": "Test",
          "score": 87
        },
        {
          "id": 4,
          "type": "HW",
          "score": 78
        }
      ]
    }
  ]
}
```

In the `app/api.service.js`, just write a method to get all of the grades data, as we have been doing. Then, in the `app/index.js` file, write a function that will get all of the grades data and then call the functions that you will write to complete the requirements below.

The functions below would be in `app/lib.js`.

## Requirements

1. `getAllStudentNames`.
1. `getStudentById`.
1. `getStudentGradeById`. Given the id for a grade and a student, return the grade. For example: `getStudentGradeById(2, 3)` should return: `{ id: 2, type: 'Quiz', score: 92 }`. In this case, the student with id 3 is Jane Doe. Jane Doe has a grade with id 2. Jane Doe's grade with id 2 is a Quiz with a score of 92.
1. `getStudentGradesByType`. Given a student's id and the type of grade, for instance `"HW"`, give me back an array of just the HW scores.
1. `addGrade`. Given a student's id, a grade type, and a score, add a new grade to the student's grades array. For example: `addGrade(1, "HW", 100)` should add a new grade to Mark West's grades array. The new grade should have a type of "HW", and a score of 100. **Note:** Don't worry about adding the `id` to any new grades.
1. `updateGrade`. Given a student's id, a grade id, and a new score, update the grade with the new score. For example: `updateGrade(1, 1, 100)` should update Mark West's grade with id 1 to have a score of 100.
1. `deleteGrade`. Given a student's id and a grade id, delete the grade from the student's grades array. For example: `deleteGrade(1, 1)` should delete Mark West's grade with id 1 from his grades array.

## Stretch

1. `getStudentAverageGrade`. Given a student, return the average grade. For example: `getStudentAverageGrade(1)` should return: `85`. In this case, the student with id 1 is Mark West. Mark West has 4 grades. The average of those 4 grades is 85. Hint: use `reduce`.
1. Create `tests/lib.test.js`. Write tests ✅.

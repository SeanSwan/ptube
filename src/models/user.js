const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class User extends Sequelize.Model {}
  User.init({
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    gender: {
      type: Sequelize.ENUM,
      values: ['male', 'female']
    },
    birthdate: {
      type: Sequelize.DATEONLY
    },
    address: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    fitnessGoals: {
      type: Sequelize.STRING
    },
    fitnessLevel: {
      type: Sequelize.INTEGER
    },
    injuryHistory: {
      type: Sequelize.STRING
    },
    specialRequests: {
      type: Sequelize.STRING
    },
    trainerId: {
      type: Sequelize.INTEGER
    }
  }, {
    sequelize,
    modelName: 'user'
  });

  // associations can be defined here
  User.associate = (models) => {
    User.belongsTo(models.Trainer, {
      foreignKey: 'trainerId',
      as: 'trainer'
    });
    User.hasMany(models.Session, {
      foreignKey: 'userId',
      as: 'sessions'
    });
  };

  return User;
};



// CREATE TABLE body_fat_measurements (
//   id SERIAL PRIMARY KEY,
//   user_id INTEGER REFERENCES users(id),
//   measurement_date DATE,
//   chest DECIMAL(4,2),
//   abdominal DECIMAL(4,2),
//   thigh DECIMAL(4,2),
//   tricep DECIMAL(4,2),
//   subscapular DECIMAL(4,2),
//   suprailiac DECIMAL(4,2),
//   bicep DECIMAL(4,2),
//   shoulder DECIMAL(4,2),
//   neck DECIMAL(4,2),
//   forearm DECIMAL(4,2),
//   calf DECIMAL(4,2),
//   body_fat_percentage DECIMAL(4,2)
// );


// You can create a new table to store the body fat measurements for your users, and link it to the existing "users" table using a foreign key constraint
// CREATE TABLE body_fat_measurements (
//   id SERIAL PRIMARY KEY,
//   user_id INTEGER REFERENCES users(id),
//   measurement_date DATE,
//   chest DECIMAL(4,2),
//   abdominal DECIMAL(4,2),
//   thigh DECIMAL(4,2),
//   tricep DECIMAL(4,2),
//   subscapular DECIMAL(4,2),
//   suprailiac DECIMAL(4,2),
//   body_fat_percentage DECIMAL(4,2)
// );
// How would I link to my users table in my react.js app?  :  const Sequelize = require('sequelize');

// module.exports = (sequelize) => {
//   class User extends Sequelize.Model {}
//   User.init({
//     // attributes
//     firstName: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     email: {
//       type: Sequelize.STRING,
//       allowNull: false,
//       unique: true
//     },
//     password: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     gender: {
//       type: Sequelize.ENUM,
//       values: ['male', 'female']
//     },
//     birthdate: {
//       type: Sequelize.DATEONLY
//     },
//     address: {
//       type: Sequelize.STRING
//     },
//     phone: {
//       type: Sequelize.STRING
//     },
//     fitnessGoals: {
//       type: Sequelize.STRING
//     },
//     fitnessLevel: {
//       type: Sequelize.INTEGER
//     },
//     injuryHistory: {
//       type: Sequelize.STRING
//     },
//     specialRequests: {
//       type: Sequelize.STRING
//     },
//     trainerId: {
//       type: Sequelize.INTEGER
//     }
//   }, {
//     sequelize,
//     modelName: 'user'
//   });

//   // associations can be defined here
//   User.associate = (models) => {
//     User.belongsTo(models.Trainer, {
//       foreignKey: 'trainerId',
//       as: 'trainer'
//     });
//     User.hasMany(models.Session, {
//       foreignKey: 'userId',
//       as: 'sessions'
//     });
//   };

//   return User;
// };
// In this example, the User model is defined using the Sequelize ORM library. The User model has a number of attributes, such as firstName, lastName, email, password, etc. The model also has a number of associations, such as belongsTo and hasMany. To link the body fat measurements table to the users table, you would need to add another association in the User model's associate function.
// You can add an association like this:

// Copy code
// User.hasMany(models.BodyFatMeasurement, {
//   foreignKey: 'userId',
//   as: 'bodyFatMeasurements'
// });
// This creates a many-to-one relationship between the body_fat_measurements table and the users table, where each row in the body_fat_measurements table references a user by its user_id.
// You'll also need to import and define the BodyFatMeasurement model in your application and set the association on that model accordingly.

// Copy code
// const BodyFatMeasurement = sequelize.define('body_fat_measurement', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   userId: {
//     type: Sequelize.INTEGER,
//     references: {
//       model: 'users',
//       key: 'id'
//     }
//   },
//   measurement_date: Sequelize.DATE,
//   chest: Sequelize.DECIMAL(4, 2),
//   abdominal: Sequelize.DECIMAL(4, 2),
//   thigh: Sequelize.DECIMAL(4, 2),
//   tricep: Sequelize.DECIMAL(4, 2),
//   subscapular: Sequelize.DECIMAL(4, 2),
//   suprailiac: Sequelize.DECIMAL(4, 2),
//   body_fat_percentage: Sequelize.DECIMAL(4, 2),
// });

// BodyFatMeasurement.associate = (models) => {
//   BodyFatMeasurement.belongsTo(models.User, {
//     foreignKey: 'userId',
//     as: 'user'
//   });
// };
// This code creates the body_fat_measurements table, with a primary key, userId foreign key that references the id in the users table, and the other fields as specified. And the BodyFatMeasurement model also has a belongsTo association with




// ogpswan@yahoo.com
// continue
// To link the "users" table with the "body_fat_measurements" table in your React.js app, you can use the associate method of the User model that you've created. Here is an example of how you can do it:

// Copy code
// User.associate = (models) => {
//     User.hasMany(models.BodyFatMeasurement, {
//       foreignKey: 'userId',
//       as: 'bodyFatMeasurements'
//     });
//   };
// This tells Sequelize that a user can have many body fat measurements, and the foreign key on the body_fat_measurements table is userId. You can also specify an as option, which allows you to access the related body fat measurements for a user through the user.bodyFatMeasurements property.

// It is also important to create the body_fat_measurement table using the sequelize models

// Copy code
// const BodyFatMeasurement = sequelize.define('body_fat_measurement', {
//   user_id: {
//     type: Sequelize.INTEGER,
//     references: {
//       model: 'users',
//       key: 'id'
//     }
//   },
//   measurement_date: {
//     type: Sequelize.DATE
//   },
//   chest: {
//     type: Sequelize.DECIMAL
//   },
//   abdominal: {
//     type: Sequelize.DECIMAL
//   },
//   thigh: {
//     type: Sequelize.DECIMAL
//   },
//   bicep: {
//     type: Sequelize.DECIMAL
//   },
//   shoulder: {
//     type: Sequelize.DECIMAL
//   },
//   neck: {
//     type: Sequelize.DECIMAL
//   },
//   forearm: {
//     type: Sequelize.DECIMAL
//   },
//   calf: {
//     type: Sequelize.DECIMAL
//   },
//   body_fat_percentage: {
//     type: Sequelize.DECIMAL
//   }
// });
// It is important to run the sync method to create the table

// Copy code
// sequelize.sync();
// You can now add, update, delete and query the body_fat_measurement table as you would with any other table using the sequelize models.


// Yes, you could use Redux Saga to handle the process of updating the user's 
// information in the database when they purchase a session from the store.

// Here is an example of a users.js file that exports a Sequelize model for a User:

// Copy code
// const Sequelize = require('sequelize');
// const sequelize = require('../util/database');

// const User = sequelize.define('user', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   sessionCount: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     defaultValue: 0
//   }
// });

// module.exports = User;
// To update the user's session count in the database, you would create a saga that listens for a PURCHASE_SESSION action, retrieves the user's current session count from the database, increments it by 1, and then updates the user's information in the database with the incremented session count.

// Copy code
// import { put, call, takeLatest } from 'redux-saga/effects';
// import User from './users';
// import { PURCHASE_SESSION } from '../actions/actionTypes';

// function* purchaseSession(action) {
//   try {
//     // retrieve user from the database
//     const user = yield call(User.findOne, { where: { email: action.email } });

//     // increment session count
//     user.sessionCount += 1;

//     // update user in the database
//     yield call(user.save);

//     // dispatch action to update state with updated user
//     yield put({ type: 'UPDATE_USER', user });
//   } catch (error) {
//     // handle error
//   }
// }

// export function* watchPurchaseSession() {
//   yield takeLatest(PURCHASE_SESSION, purchaseSession);
// }
// Then in your store.js file, you would add the watchPurchaseSession saga to the list of sagas that are run by the store.

// Copy code
// import createSagaMiddleware from 'redux-saga';
// import { watchPurchaseSession } from './sagas/user';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(sagaMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// sagaMiddleware.run(watchPurchaseSession);
// Please note that this is just a simple example and you should handle errors, validation and other cases in your implementation
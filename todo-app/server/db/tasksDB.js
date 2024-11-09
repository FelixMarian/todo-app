import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/tasks';

//Conection to db where tasks are saved
async function connectDB() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected successfully.');
    } catch (error) {
        console.error('Error when connecting: ', error);
    }
}

export default connectDB;

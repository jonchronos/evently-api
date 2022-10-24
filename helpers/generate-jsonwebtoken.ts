import jwt from 'jsonwebtoken'

export const generateToken = (aid: string) => {

    return new Promise((resolve, reject) => {

        jwt.sign({ aid }, process.env.PRIVATE_KEY as string, {
            expiresIn: '48h'
        }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    })
}
const bcrypt= require("bcrypt")
const passwordGenerate = async(password)=>{
    const salt = await bcrypt.genSaltSync(10)
    const hash = await bcrypt.hashSync(password,salt)
    return hash

}

const passwordValidate = async(password,hash)=>{
    return bcrypt.compareSync(password,hash)
}

module.exports = {passwordGenerate,passwordValidate}
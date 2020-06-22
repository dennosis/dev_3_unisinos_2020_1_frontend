export const formatCpf = (cpf) => {
    cpf = (cpf+"").replace(/[^\d]/g, "");
    cpf = '0'.repeat(11-cpf.length)+cpf
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export const formatPhone = (phone) => {
    phone = (phone+"").replace(/[^\d]/g, "");
    return phone.replace(/(\d{2})(\d{0,5})(\d{0,4})/, "($1) $2 $3");
}

export const formatCnh = (cnh) => {
    cnh = (cnh+"").replace(/[^\d]/g, "");
    return cnh.replace(/(\d{3})(\d{3})(\d{3})(\d{0,3})/, "$1 $2 $3 $4");
}

export const formatCep = (cep) => {
    cep = (cep+"").replace(/[^\d]/g, "");
    return cep.replace(/(\d{5})(\d{0,3})/, "$1-$2");
}

export const formatDate = (date) => {
    date = new Date(date)
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

export const formatMoney = (money) => {
    money = parseFloat(money).toLocaleString('pt-BR',{minimumFractionDigits: 2})
    return "R$ "+money;
}
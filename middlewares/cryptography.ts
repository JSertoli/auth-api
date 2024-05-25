import crypto from 'crypto';

export function criptography(password: string): string {

    // Criar um novo hash usando o algoritmo SHA256
    const hash = crypto.createHash('sha256');

    // Adicionar a senha ao hash
    hash.update(password);

    // Obter o valor do hash codificado
    const encodedPassword = hash.digest('hex');

    return encodedPassword; // Exibe o valor do hash codificado

}

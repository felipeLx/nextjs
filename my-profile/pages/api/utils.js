import { apiHandler, certificateRepo } from 'helpers/api';

export default apiHandler({
    get: getCertificates
});

function getCertificates(req, res) {
    const response = certificateRepo.getAll();
    return res.status(200).json(response);
}
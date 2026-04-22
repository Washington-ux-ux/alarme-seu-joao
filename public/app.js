const apiUrl = '/api/client';
const form = document.getElementById('client-form');
const messageEl = document.getElementById('message');
const clientList = document.getElementById('client-list');
const clientIdInput = document.getElementById('client-id');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');

const showMessage = (text, type = 'success') => {
    messageEl.textContent = text;
    messageEl.className = `message ${type}`;
    setTimeout(() => {
        messageEl.textContent = '';
        messageEl.className = 'message';
    }, 4000);
};

const clearForm = () => {
    form.reset();
    clientIdInput.value = '';
    submitBtn.textContent = 'Enviar';
};

const loadClients = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        clientList.innerHTML = '';
        if (!Array.isArray(data) || data.length === 0) {
            clientList.innerHTML = '<tr><td colspan="6">Nenhum cliente cadastrado.</td></tr>';
            return;
        }

        data.forEach(client => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td data-label="ID">${client.id}</td>
                <td data-label="Nome">${client.nome}</td>
                <td data-label="Telefone">${client.telefone}</td>
                <td data-label="Endereço">${client.endereco}</td>
                <td data-label="Email">${client.email}</td>
                <td data-label="Ações">
                    <button class="btn-action edit-btn" onclick="editClient(${client.id}, '${client.nome}', ${client.telefone}, '${client.endereco}', '${client.email}')">Editar</button>
                    <button class="btn-action delete-btn" onclick="deleteClient(${client.id})">Excluir</button>
                </td>
            `;
            clientList.appendChild(row);
        });
    } catch (error) {
        showMessage('Erro ao carregar clientes.', 'error');
    }
};

const editClient = (id, nome, telefone, endereco, email) => {
    clientIdInput.value = id;
    document.getElementById('nome').value = nome;
    document.getElementById('telefone').value = telefone;
    document.getElementById('endereco').value = endereco;
    document.getElementById('email').value = email;
    submitBtn.textContent = 'Atualizar';
    form.scrollIntoView({ behavior: 'smooth' });
};

const deleteClient = async (id) => {
    if (!confirm(`Tem certeza que deseja excluir o cliente #${id}?`)) {
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            showMessage('Cliente excluído com sucesso.');
            loadClients();
        } else {
            showMessage('Não foi possível excluir o cliente.', 'error');
        }
    } catch (error) {
        showMessage('Erro ao excluir o cliente.', 'error');
    }
};

form.addEventListener('submit', async event => {
    event.preventDefault();

    const clientId = clientIdInput.value;
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nome || !telefone || !endereco || !email) {
        showMessage('Preencha todos os campos.', 'error');
        return;
    }

    const body = {
        nome,
        telefone: Number(telefone),
        endereco,
        email
    };

    try {
        let response;
        let url = apiUrl;
        let method = 'POST';

        if (clientId) {
            url = `${apiUrl}/${clientId}`;
            method = 'PUT';
        }

        response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const result = await response.json();
        if (response.ok) {
            showMessage(result.message || 'Operação concluída com sucesso.');
            clearForm();
            loadClients();
        } else {
            showMessage(result.message || 'Não foi possível concluir a operação.', 'error');
        }
    } catch (error) {
        showMessage('Erro ao enviar os dados.', 'error');
    }
});

resetBtn.addEventListener('click', clearForm);

loadClients();

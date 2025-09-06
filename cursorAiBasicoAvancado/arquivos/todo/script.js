/**
 * Todo List - Sistema de Gerenciamento de Tarefas
 * 
 * Este sistema permite aos usuários:
 * - Adicionar novas tarefas
 * - Marcar tarefas como concluídas
 * - Editar tarefas existentes
 * - Excluir tarefas
 * - Filtrar tarefas por status
 * - Visualizar estatísticas
 * 
 * @author Sistema Todo List
 * @version 1.0.0
 */

class TodoList {
    /**
     * Construtor da classe TodoList
     * Inicializa o sistema e configura os event listeners
     */
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFilter = 'all';
        this.searchTerm = '';
        this.editingTaskId = null;
        
        this.initializeElements();
        this.setupEventListeners();
        this.render();
    }

    /**
     * Inicializa as referências dos elementos DOM
     * 
     * @returns {void}
     */
    initializeElements() {
        // Botão nova tarefa
        this.newTaskBtn = document.getElementById('newTaskBtn');
        
        // Elementos de busca
        this.searchInput = document.getElementById('searchInput');
        this.clearSearchBtn = document.getElementById('clearSearch');
        this.searchInfo = document.getElementById('searchInfo');
        this.searchResultsCount = document.getElementById('searchResultsCount');
        
        // Lista e elementos principais
        this.todoList = document.getElementById('todoList');
        this.emptyState = document.getElementById('emptyState');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.clearCompletedBtn = document.getElementById('clearCompleted');
        
        // Modal de adição
        this.addTaskModal = document.getElementById('addTaskModal');
        this.addTaskForm = document.getElementById('addTaskForm');
        this.closeAddModalBtn = document.getElementById('closeAddModal');
        this.addTaskTitle = document.getElementById('addTaskTitle');
        this.addTaskDescription = document.getElementById('addTaskDescription');
        this.addTaskDifficulty = document.getElementById('addTaskDifficulty');
        this.cancelAddTaskBtn = document.getElementById('cancelAddTask');
        
        // Modal de edição
        this.editTaskModal = document.getElementById('editTaskModal');
        this.editTaskForm = document.getElementById('editTaskForm');
        this.closeEditModalBtn = document.getElementById('closeEditModal');
        this.editTaskTitle = document.getElementById('editTaskTitle');
        this.editTaskDescription = document.getElementById('editTaskDescription');
        this.editTaskDifficulty = document.getElementById('editTaskDifficulty');
        this.editTaskStatus = document.getElementById('editTaskStatus');
        this.deleteTaskFromEditBtn = document.getElementById('deleteTaskFromEdit');
        
        // Elementos de metadados do modal de edição
        this.editCreatedAt = document.getElementById('editCreatedAt');
        this.editUpdatedAt = document.getElementById('editUpdatedAt');
        this.editCompletedAt = document.getElementById('editCompletedAt');
        this.editUpdatedMeta = document.getElementById('editUpdatedMeta');
        this.editCompletedMeta = document.getElementById('editCompletedMeta');
        
        // Elementos das estatísticas
        this.totalTasksElement = document.getElementById('totalTasks');
        this.pendingTasksElement = document.getElementById('pendingTasks');
        this.completedTasksElement = document.getElementById('completedTasks');
    }

    /**
     * Configura todos os event listeners necessários
     * 
     * @returns {void}
     */
    setupEventListeners() {
        // Botão nova tarefa
        this.newTaskBtn.addEventListener('click', () => this.openAddTaskModal());
        
        // Busca
        this.searchInput.addEventListener('input', debounce((e) => this.handleSearch(e), 300));
        this.clearSearchBtn.addEventListener('click', () => this.clearSearch());
        
        // Filtros
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilterChange(e));
        });
        
        // Botão de limpar tarefas concluídas
        this.clearCompletedBtn.addEventListener('click', () => this.clearCompletedTasks());
        
        // Modal de adição event listeners
        this.addTaskForm.addEventListener('submit', (e) => this.handleAddTaskSubmit(e));
        this.closeAddModalBtn.addEventListener('click', () => this.closeAddTaskModal());
        this.cancelAddTaskBtn.addEventListener('click', () => this.closeAddTaskModal());
        this.addTaskModal.addEventListener('click', (e) => {
            if (e.target === this.addTaskModal) this.closeAddTaskModal();
        });
        
        // Modal de edição event listeners
        this.editTaskForm.addEventListener('submit', (e) => this.handleEditTaskSubmit(e));
        this.closeEditModalBtn.addEventListener('click', () => this.closeEditTaskModal());
        this.editTaskModal.addEventListener('click', (e) => {
            if (e.target === this.editTaskModal) this.closeEditTaskModal();
        });
        this.editTaskStatus.addEventListener('change', () => this.updateTaskStatusFromEdit());
        this.deleteTaskFromEditBtn.addEventListener('click', () => this.deleteTaskFromEdit());
        
        // Teclas de atalho
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
    }

    /**
     * Manipula o envio do formulário de adição de tarefa
     * 
     * @param {Event} e - Evento de submit do formulário
     * @returns {void}
     */
    handleAddTaskSubmit(e) {
        e.preventDefault();
        
        const taskText = this.addTaskTitle.value.trim();
        const taskDescription = this.addTaskDescription.value.trim();
        const taskDifficulty = this.addTaskDifficulty.value;
        
        if (!taskText || !taskDifficulty) {
            alert('Por favor, preencha o título e selecione a dificuldade da tarefa.');
            return;
        }

        this.addTask({
            text: taskText,
            description: taskDescription,
            difficulty: taskDifficulty
        });
        
        this.closeAddTaskModal();
    }

    /**
     * Manipula o envio do formulário de edição de tarefa
     * 
     * @param {Event} e - Evento de submit do formulário
     * @returns {void}
     */
    handleEditTaskSubmit(e) {
        e.preventDefault();
        
        if (!this.currentEditingTaskId) return;
        
        const taskText = this.editTaskTitle.value.trim();
        const taskDescription = this.editTaskDescription.value.trim();
        const taskDifficulty = this.editTaskDifficulty.value;
        
        if (!taskText || !taskDifficulty) {
            alert('Por favor, preencha o título e selecione a dificuldade da tarefa.');
            return;
        }

        this.updateTask(this.currentEditingTaskId, {
            text: taskText,
            description: taskDescription,
            difficulty: taskDifficulty
        });
        
        this.closeEditTaskModal();
    }

    /**
     * Adiciona uma nova tarefa à lista
     * 
     * @param {Object} taskData - Dados da tarefa
     * @param {string} taskData.text - Título da tarefa
     * @param {string} taskData.description - Descrição da tarefa
     * @param {string} taskData.difficulty - Dificuldade da tarefa
     * @returns {void}
     */
    addTask(taskData) {
        const task = {
            id: Date.now(),
            text: taskData.text,
            description: taskData.description || '',
            difficulty: taskData.difficulty,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: null,
            completedAt: null
        };
        
        this.tasks.unshift(task);
        this.saveTasks();
        this.render();
        
        // Animação de adição
        this.animateTaskAddition();
    }

    /**
     * Atualiza uma tarefa existente
     * 
     * @param {number} taskId - ID da tarefa a ser atualizada
     * @param {Object} newData - Novos dados da tarefa
     * @param {string} newData.text - Novo título
     * @param {string} newData.description - Nova descrição
     * @param {string} newData.difficulty - Nova dificuldade
     * @returns {void}
     */
    updateTask(taskId, newData) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.text = newData.text;
            task.description = newData.description || '';
            task.difficulty = newData.difficulty;
            task.updatedAt = new Date().toISOString();
            this.saveTasks();
            this.render();
        }
    }

    /**
     * Alterna o status de conclusão de uma tarefa
     * 
     * @param {number} taskId - ID da tarefa
     * @returns {void}
     */
    toggleTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            task.completedAt = task.completed ? new Date().toISOString() : null;
            this.saveTasks();
            this.render();
        }
    }

    /**
     * Abre o modal para editar uma tarefa
     * 
     * @param {number} taskId - ID da tarefa a ser editada
     * @returns {void}
     */
    editTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (!task) return;
        
        this.currentEditingTaskId = taskId;
        
        // Preencher dados no modal de edição
        this.editTaskTitle.value = task.text;
        this.editTaskDescription.value = task.description || '';
        this.editTaskDifficulty.value = task.difficulty;
        this.editTaskStatus.checked = task.completed;
        
        // Metadados
        this.editCreatedAt.textContent = this.formatDate(task.createdAt);
        
        if (task.updatedAt) {
            this.editUpdatedAt.textContent = this.formatDate(task.updatedAt);
            this.editUpdatedMeta.style.display = 'block';
        } else {
            this.editUpdatedMeta.style.display = 'none';
        }
        
        if (task.completedAt) {
            this.editCompletedAt.textContent = this.formatDate(task.completedAt);
            this.editCompletedMeta.style.display = 'block';
        } else {
            this.editCompletedMeta.style.display = 'none';
        }
        
        // Mostrar modal de edição
        this.editTaskModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focar no título
        setTimeout(() => {
            this.editTaskTitle.focus();
            this.editTaskTitle.select();
        }, 100);
    }

    /**
     * Exclui uma tarefa da lista
     * 
     * @param {number} taskId - ID da tarefa a ser excluída
     * @returns {void}
     */
    deleteTask(taskId) {
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        
        if (taskElement) {
            taskElement.classList.add('removing');
            
            setTimeout(() => {
                this.tasks = this.tasks.filter(t => t.id !== taskId);
                this.saveTasks();
                this.render();
                
                if (this.editingTaskId === taskId) {
                    this.cancelEdit();
                }
            }, 300);
        }
    }

    /**
     * Remove todas as tarefas concluídas
     * 
     * @returns {void}
     */
    clearCompletedTasks() {
        const completedTasks = this.tasks.filter(t => t.completed);
        
        if (completedTasks.length === 0) return;
        
        if (confirm(`Deseja realmente excluir ${completedTasks.length} tarefa(s) concluída(s)?`)) {
            this.tasks = this.tasks.filter(t => !t.completed);
            this.saveTasks();
            this.render();
        }
    }

    /**
     * Manipula a mudança de filtro
     * 
     * @param {Event} e - Evento de clique no botão de filtro
     * @returns {void}
     */
    handleFilterChange(e) {
        const filter = e.target.dataset.filter;
        if (filter) {
            this.currentFilter = filter;
            
            // Atualizar estado visual dos botões
            this.filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            this.render();
        }
    }

    /**
     * Filtra as tarefas baseado no filtro atual e termo de busca
     * 
     * @returns {Array} Array de tarefas filtradas
     */
    getFilteredTasks() {
        let filteredTasks = this.tasks;
        
        // Filtro por status
        switch (this.currentFilter) {
            case 'pending':
                filteredTasks = filteredTasks.filter(t => !t.completed);
                break;
            case 'completed':
                filteredTasks = filteredTasks.filter(t => t.completed);
                break;
            default:
                // 'all' - não filtra por status
                break;
        }
        
        // Filtro por busca
        if (this.searchTerm.trim()) {
            const searchLower = this.searchTerm.toLowerCase().trim();
            filteredTasks = filteredTasks.filter(task => 
                task.text.toLowerCase().includes(searchLower)
            );
        }
        
        return filteredTasks;
    }

    /**
     * Calcula e atualiza as estatísticas
     * 
     * @returns {void}
     */
    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const pending = total - completed;
        
        this.totalTasksElement.textContent = total;
        this.pendingTasksElement.textContent = pending;
        this.completedTasksElement.textContent = completed;
        
        // Atualizar estado do botão de limpar concluídas
        this.clearCompletedBtn.disabled = completed === 0;
    }

    /**
     * Renderiza a lista de tarefas na interface
     * 
     * @returns {void}
     */
    render() {
        const filteredTasks = this.getFilteredTasks();
        
        this.todoList.innerHTML = '';
        
        // Atualizar informações de busca
        this.updateSearchInfo(filteredTasks.length);
        
        if (filteredTasks.length === 0) {
            this.emptyState.style.display = 'block';
            // Atualizar mensagem se houver busca ativa
            if (this.searchTerm.trim()) {
                this.emptyState.innerHTML = `
                    <i class="fas fa-search"></i>
                    <h3>Nenhuma tarefa encontrada</h3>
                    <p>Nenhuma tarefa corresponde ao termo "${this.escapeHtml(this.searchTerm)}"</p>
                    <button class="btn-clear-search" onclick="todoApp.clearSearch()">
                        <i class="fas fa-times"></i> Limpar busca
                    </button>
                `;
            } else {
                this.emptyState.innerHTML = `
                    <i class="fas fa-clipboard-list"></i>
                    <h3>Nenhuma tarefa encontrada</h3>
                    <p>Adicione uma nova tarefa para começar!</p>
                `;
            }
        } else {
            this.emptyState.style.display = 'none';
            
            filteredTasks.forEach(task => {
                const taskElement = this.createTaskElement(task);
                this.todoList.appendChild(taskElement);
            });
        }
        
        this.updateStats();
    }

    /**
     * Cria o elemento DOM para uma tarefa
     * 
     * @param {Object} task - Objeto da tarefa
     * @param {number} task.id - ID da tarefa
     * @param {string} task.text - Texto da tarefa
     * @param {boolean} task.completed - Status de conclusão
     * @returns {HTMLElement} Elemento li da tarefa
     */
    createTaskElement(task) {
        const li = document.createElement('li');
        li.className = `todo-item ${task.completed ? 'completed' : ''}`;
        li.setAttribute('data-task-id', task.id);
        
        const difficultyLabels = {
            easy: '🟢 Fácil',
            medium: '🟡 Média',
            hard: '🔴 Difícil'
        };
        
        // Destacar termo de busca no título
        const highlightedTitle = this.highlightSearchTerm(task.text);
        const highlightedDescription = task.description ? this.highlightSearchTerm(task.description.substring(0, 100)) : '';
        
        li.innerHTML = `
            <input 
                type="checkbox" 
                class="todo-checkbox" 
                ${task.completed ? 'checked' : ''}
                onchange="todoApp.toggleTask(${task.id})"
            >
            <div class="task-content">
                <div class="task-header">
                    <span class="task-difficulty difficulty-${task.difficulty}">
                        ${difficultyLabels[task.difficulty] || task.difficulty}
                    </span>
                    <span class="todo-text" onclick="todoApp.openTaskModal(${task.id})">
                        ${highlightedTitle}
                    </span>
                </div>
                ${task.description ? `<div class="task-description-preview">${highlightedDescription}${task.description.length > 100 ? '...' : ''}</div>` : ''}
            </div>
            <div class="todo-actions">
                <button class="btn-action btn-edit" onclick="todoApp.editTask(${task.id})" title="Editar tarefa">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-action btn-delete" onclick="todoApp.deleteTask(${task.id})" title="Excluir tarefa">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        return li;
    }

    /**
     * Escapa caracteres HTML para prevenir XSS
     * 
     * @param {string} text - Texto a ser escapado
     * @returns {string} Texto com caracteres HTML escapados
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Anima a adição de uma nova tarefa
     * 
     * @returns {void}
     */
    animateTaskAddition() {
        setTimeout(() => {
            const firstTask = this.todoList.querySelector('.todo-item');
            if (firstTask) {
                firstTask.style.animation = 'slideIn 0.3s ease';
            }
        }, 50);
    }

    /**
     * Abre o modal para adicionar nova tarefa
     * 
     * @returns {void}
     */
    openAddTaskModal() {
        this.clearAddTaskForm();
        this.addTaskModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focar no título
        setTimeout(() => {
            this.addTaskTitle.focus();
        }, 100);
    }

    /**
     * Fecha o modal de adição de tarefa
     * 
     * @returns {void}
     */
    closeAddTaskModal() {
        this.addTaskModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.clearAddTaskForm();
    }

    /**
     * Fecha o modal de edição de tarefa
     * 
     * @returns {void}
     */
    closeEditTaskModal() {
        this.editTaskModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.currentEditingTaskId = null;
    }

    /**
     * Limpa o formulário de adição
     * 
     * @returns {void}
     */
    clearAddTaskForm() {
        this.addTaskTitle.value = '';
        this.addTaskDescription.value = '';
        this.addTaskDifficulty.value = '';
    }

    /**
     * Abre o modal de edição ao clicar no título da tarefa
     * 
     * @param {number} taskId - ID da tarefa
     * @returns {void}
     */
    openTaskModal(taskId) {
        this.editTask(taskId);
    }

    /**
     * Exclui a tarefa do modal de edição
     * 
     * @returns {void}
     */
    deleteTaskFromEdit() {
        if (!this.currentEditingTaskId) return;
        
        if (confirm('Deseja realmente excluir esta tarefa?')) {
            this.deleteTask(this.currentEditingTaskId);
            this.closeEditTaskModal();
        }
    }

    /**
     * Atualiza o status da tarefa do modal de edição
     * 
     * @returns {void}
     */
    updateTaskStatusFromEdit() {
        if (!this.currentEditingTaskId) return;
        this.toggleTask(this.currentEditingTaskId);
        
        // Atualizar metadados no modal
        const task = this.tasks.find(t => t.id === this.currentEditingTaskId);
        if (task && task.completedAt) {
            this.editCompletedAt.textContent = this.formatDate(task.completedAt);
            this.editCompletedMeta.style.display = 'block';
        } else {
            this.editCompletedMeta.style.display = 'none';
        }
    }

    /**
     * Formata uma data para exibição
     * 
     * @param {string} dateString - String de data ISO
     * @returns {string} Data formatada
     */
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    /**
     * Manipula a busca por título de tarefa
     * 
     * @param {Event} e - Evento de input
     * @returns {void}
     */
    handleSearch(e) {
        this.searchTerm = e.target.value;
        
        // Mostrar/esconder botão de limpar
        if (this.searchTerm.trim()) {
            this.clearSearchBtn.classList.add('active');
        } else {
            this.clearSearchBtn.classList.remove('active');
        }
        
        this.render();
    }

    /**
     * Limpa o termo de busca
     * 
     * @returns {void}
     */
    clearSearch() {
        this.searchTerm = '';
        this.searchInput.value = '';
        this.clearSearchBtn.classList.remove('active');
        this.searchInfo.style.display = 'none';
        this.render();
        this.searchInput.focus();
    }

    /**
     * Atualiza as informações de busca
     * 
     * @param {number} resultsCount - Número de resultados encontrados
     * @returns {void}
     */
    updateSearchInfo(resultsCount) {
        if (this.searchTerm.trim()) {
            this.searchInfo.style.display = 'block';
            this.searchResultsCount.textContent = resultsCount;
            
            if (resultsCount === 0) {
                this.searchInfo.classList.add('no-results');
                this.searchInfo.classList.remove('has-results');
            } else {
                this.searchInfo.classList.add('has-results');
                this.searchInfo.classList.remove('no-results');
            }
        } else {
            this.searchInfo.style.display = 'none';
        }
    }

    /**
     * Destaca o termo de busca no texto
     * 
     * @param {string} text - Texto onde destacar o termo
     * @returns {string} Texto com destaque HTML
     */
    highlightSearchTerm(text) {
        if (!this.searchTerm.trim()) {
            return this.escapeHtml(text);
        }
        
        const escapedText = this.escapeHtml(text);
        const searchTerm = this.escapeHtml(this.searchTerm.trim());
        const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        
        return escapedText.replace(regex, '<span class="task-highlight">$1</span>');
    }

    /**
     * Manipula atalhos de teclado
     * 
     * @param {KeyboardEvent} e - Evento de teclado
     * @returns {void}
     */
    handleKeyboardShortcuts(e) {
        // Esc para fechar modals ou limpar busca
        if (e.key === 'Escape') {
            if (this.addTaskModal.classList.contains('active')) {
                this.closeAddTaskModal();
            } else if (this.editTaskModal.classList.contains('active')) {
                this.closeEditTaskModal();
            } else if (this.searchTerm.trim()) {
                this.clearSearch();
            }
        }
        
        // Ctrl/Cmd + N para nova tarefa
        if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
            e.preventDefault();
            this.openAddTaskModal();
        }
        
        // Ctrl/Cmd + F para focar na busca
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            this.searchInput.focus();
            this.searchInput.select();
        }
    }

    /**
     * Salva as tarefas no localStorage
     * 
     * @returns {void}
     */
    saveTasks() {
        try {
            localStorage.setItem('todoList', JSON.stringify(this.tasks));
        } catch (error) {
            console.error('Erro ao salvar tarefas:', error);
            alert('Erro ao salvar as tarefas. Verifique se o armazenamento local está disponível.');
        }
    }

    /**
     * Carrega as tarefas do localStorage
     * 
     * @returns {Array} Array de tarefas carregadas ou array vazio se não houver dados
     */
    loadTasks() {
        try {
            const tasks = localStorage.getItem('todoList');
            return tasks ? JSON.parse(tasks) : [];
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
            return [];
        }
    }

    /**
     * Exporta as tarefas como JSON para download
     * 
     * @returns {void}
     */
    exportTasks() {
        const dataStr = JSON.stringify(this.tasks, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `todo-list-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
    }

    /**
     * Importa tarefas de um arquivo JSON
     * 
     * @param {File} file - Arquivo JSON contendo as tarefas
     * @returns {void}
     */
    importTasks(file) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const importedTasks = JSON.parse(e.target.result);
                
                if (Array.isArray(importedTasks)) {
                    this.tasks = importedTasks;
                    this.saveTasks();
                    this.render();
                    alert('Tarefas importadas com sucesso!');
                } else {
                    throw new Error('Formato de arquivo inválido');
                }
            } catch (error) {
                console.error('Erro ao importar tarefas:', error);
                alert('Erro ao importar tarefas. Verifique se o arquivo está no formato correto.');
            }
        };
        
        reader.readAsText(file);
    }

    /**
     * Retorna estatísticas detalhadas das tarefas
     * 
     * @returns {Object} Objeto contendo estatísticas das tarefas
     */
    getDetailedStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const pending = total - completed;
        const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        return {
            total,
            completed,
            pending,
            completionRate,
            averageTaskLength: total > 0 ? Math.round(this.tasks.reduce((sum, task) => sum + task.text.length, 0) / total) : 0
        };
    }
}

/**
 * Inicializa a aplicação quando o DOM estiver carregado
 */
document.addEventListener('DOMContentLoaded', () => {
    // Criar instância global da aplicação
    window.todoApp = new TodoList();
    
    // Adicionar message de boas-vindas no console
    console.log('📝 Todo List carregado com sucesso!');
    console.log('💡 Dicas:');
    console.log('   - Use Esc para cancelar edição');
    console.log('   - Use Ctrl/Cmd + Enter para focar no input');
    console.log('   - Acesse todoApp.getDetailedStats() para estatísticas detalhadas');
});

/**
 * Funções utilitárias globais
 */

/**
 * Debounce para otimizar performance em eventos frequentes
 * 
 * @param {Function} func - Função a ser executada
 * @param {number} wait - Tempo de espera em milissegundos
 * @param {boolean} immediate - Se deve executar imediatamente
 * @returns {Function} Função com debounce aplicado
 */
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}
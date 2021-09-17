module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Contacts');
    },
    down: async () => {
        console.log('Erro ao tentar drop table Contacts');
    }
};
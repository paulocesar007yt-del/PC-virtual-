// ==========================================
//          PC VIRTUAL - JAVASCRIPT
// ==========================================

class PCVirtual {

    constructor() {

        this.ligado = false;

        this.usuario = "Mr Ph";

        this.sistema = "PC Virtual OS";

        this.cpu = "AMD Ryzen 5 5600";

        this.gpu = "RTX 4060 8GB";

        this.ram = "16 GB DDR4";

        this.ssd = "1 TB NVMe";

        this.fonte = "650W 80 Plus";

    }


    // Ligar PC
    ligar() {

        if (this.ligado) {

            console.log("O PC já está ligado.");

            return;
        }

        this.ligado = true;

        console.log("================================");
        console.log("       PC VIRTUAL");
        console.log("================================");
        console.log("Iniciando sistema...");
        console.log("Carregando BIOS...");
        console.log("Verificando hardware...");
        console.log("Carregando sistema operacional...");
        console.log("");
        console.log("PC ligado com sucesso!");
        console.log(`Usuário: ${this.usuario}`);
        console.log(`Sistema: ${this.sistema}`);
        console.log("================================");
    }


    // Desligar PC
    desligar() {

        if (!this.ligado) {

            console.log("O PC já está desligado.");

            return;
        }

        this.ligado = false;

        console.log("Encerrando sistema...");

        console.log("PC desligado.");
    }


    // Mostrar informações
    informacoes() {

        if (!this.ligado) {

            console.log("Ligue o PC primeiro.");

            return;
        }

        console.log("");
        console.log("====== MEU PC ======");

        console.log(`Sistema: ${this.sistema}`);

        console.log(`Usuário: ${this.usuario}`);

        console.log(`CPU: ${this.cpu}`);

        console.log(`GPU: ${this.gpu}`);

        console.log(`RAM: ${this.ram}`);

        console.log(`SSD: ${this.ssd}`);

        console.log(`Fonte: ${this.fonte}`);

        console.log("====================");
    }


    // Mostrar build
    build() {

        console.log("");
        console.log("====== BUILD ======");

        console.log("CPU  → Ryzen 5 5600");

        console.log("GPU  → RTX 4060 8GB");

        console.log("RAM  → 16GB DDR4");

        console.log("SSD  → NVMe 1TB");

        console.log("Fonte → 650W");

        console.log("===================");
    }


    // Abrir programa
    abrirPrograma(nome) {

        if (!this.ligado) {

            console.log("Ligue o PC primeiro.");

            return;
        }

        console.log(`Abrindo ${nome}...`);

        switch (nome.toLowerCase()) {

            case "navegador":

                console.log("🌐 Navegador aberto.");

                break;

            case "terminal":

                console.log("⌨️ Terminal aberto.");

                break;

            case "configuracoes":

                console.log("⚙️ Configurações abertas.");

                break;

            case "jogos":

                console.log("🎮 Central de jogos aberta.");

                break;

            default:

                console.log("Programa não encontrado.");

        }
    }


    // Status
    status() {

        console.log("");

        console.log("====== STATUS ======");

        console.log(
            this.ligado
                ? "🟢 PC LIGADO"
                : "🔴 PC DESLIGADO"
        );

        console.log("====================");
    }
}


// ==========================================
// CRIANDO O PC
// ==========================================

const meuPC = new PCVirtual();


// ==========================================
// TESTES
// ==========================================

meuPC.ligar();

meuPC.status();

meuPC.informacoes();

meuPC.build();

meuPC.abrirPrograma("navegador");

meuPC.abrirPrograma("terminal");

meuPC.abrirPrograma("jogos");

meuPC.status();

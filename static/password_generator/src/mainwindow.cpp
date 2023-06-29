#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    connect(ui->pushButton, &QPushButton::clicked, this, &MainWindow::getPassword);
    connect(ui->spinBox, &QSpinBox::valueChanged, this, &MainWindow::radios);
    connect(this->p, &QProgressBar::valueChanged, this, &MainWindow::explosion);
}

MainWindow::~MainWindow()
{
    delete ui;
}

bool MainWindow::validate() {
    if (!ui->checkBox_char->isChecked() && !ui->checkBox_num->isChecked() && !ui->checkBox_bracket->isChecked() && !ui->checkBox_special->isChecked())
        return false;
    if (ui->checkBox_char->isChecked() && !ui->radioButton_lC->isChecked() && !ui->radioButton_uC->isChecked() && !ui->radioButton_ulC->isChecked())
        return false;
    return true;
}

void MainWindow::getPassword() {
    if (!this->secret_activated) secret();

    if (!validate()) {
        ui->lineEdit->setText( QString("Please double check your settings") );
        return;
    }
    std::string usable_chars{};
    std::string password{};

    std::random_device rd;
    std::mt19937 gen(rd());


    if (ui->checkBox_char->isChecked()) {
        if (ui->radioButton_ulC->isChecked()) {
            usable_chars.append( this->uLetters );
            usable_chars.append( this->lLetters );
        }
        else {
            if (ui->radioButton_lC->isChecked()) usable_chars.append( this->lLetters );
            if (ui->radioButton_uC->isChecked()) usable_chars.append( this->uLetters );
        }
    }
    if (ui->checkBox_num->isChecked()) usable_chars.append( this->numbers );
    if (ui->checkBox_bracket->isChecked()) usable_chars.append( this->backets );
    if (ui->checkBox_special->isChecked()) usable_chars.append( this->special );

    std::uniform_int_distribution<int> distribution(0, usable_chars.length()-1);

    for (int i = 0; i < ui->spinBox->value(); i++) {
        password += usable_chars[distribution(gen)];
    }

    ui->lineEdit->setText( QString::fromStdString(password) );
}

void MainWindow::radios(int v) {
    if (v != 69) {
        ui->radioButton_lC->setAutoExclusive(true);
        ui->radioButton_uC->setAutoExclusive(true);
        ui->radioButton_ulC->setAutoExclusive(true);
    } else {
        ui->radioButton_lC->setAutoExclusive(false);
        ui->radioButton_uC->setAutoExclusive(false);
        ui->radioButton_ulC->setAutoExclusive(false);
    }

    if (this->secret_activated) this->p->setValue(ui->spinBox->value());
}

void MainWindow::secret() {
    if (ui->radioButton_lC->isChecked() && ui->radioButton_uC->isChecked() && ui->radioButton_ulC->isChecked()) {
        this->p->setRange(ui->spinBox->minimum(), ui->spinBox->maximum());
        this->p->setValue(ui->spinBox->value());
        ui->gridLayout->addWidget(p);
        this->secret_activated = true;
    }
}

void MainWindow::explosion(int v) {
    if (v == this->p->maximum()) {
        ui->label->setText( QString("This is a secret message from frido\nI hope feldler doesn't find it...\nc++ > php") );
    }
}

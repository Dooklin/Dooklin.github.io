#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QProgressBar>
#include <string>
#include <random>

QT_BEGIN_NAMESPACE
namespace Ui { class MainWindow; }
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private:
    Ui::MainWindow *ui;
    bool secret_activated = false;

    std::string uLetters = "QWERTZUIOPLKJHGFDSAYXCVBNM";
    std::string lLetters = "qwertzuioplkjhgfdsayxcvbnm";
    std::string numbers = "1234567890";
    std::string backets = "[](){}";
    std::string special = "!\"#$%&'*+,-./:;<=>?@\\^_`|~";


    QProgressBar *p = new QProgressBar();

    bool validate();
    void getPassword();
    void radios(int);
    void secret();
    void explosion(int);
};
#endif // MAINWINDOW_H

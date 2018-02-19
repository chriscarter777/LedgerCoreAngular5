using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace pla5.Migrations
{
    public partial class transactionPayeesAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "AcctTo",
                table: "Transactions",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "AcctFrom",
                table: "Transactions",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "PayeeFrom",
                table: "Transactions",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PayeeTo",
                table: "Transactions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PayeeFrom",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "PayeeTo",
                table: "Transactions");

            migrationBuilder.AlterColumn<int>(
                name: "AcctTo",
                table: "Transactions",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "AcctFrom",
                table: "Transactions",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace pla5.Migrations
{
    public partial class renamedtransactionfields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DrAcct",
                table: "Transactions",
                newName: "AcctTo");

            migrationBuilder.RenameColumn(
                name: "CrAcct",
                table: "Transactions",
                newName: "AcctFrom");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AcctTo",
                table: "Transactions",
                newName: "DrAcct");

            migrationBuilder.RenameColumn(
                name: "AcctFrom",
                table: "Transactions",
                newName: "CrAcct");
        }
    }
}

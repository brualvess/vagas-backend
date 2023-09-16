import { HttpStatus, applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { UnauthorizedSwagger } from "../../unauthorized.swagger";
import { BadRequestSwagger } from "../../bad-request.swagger";

export function GetAllJobsSwagger() {
    return applyDecorators(
        ApiOperation({
            summary: 'Buscar todas as vagas.',
          })
    )
}
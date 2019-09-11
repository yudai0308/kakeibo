@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="mb-4 border-bottom">
                <p class="font-weight-bold">あなたとシェアされている{{ env("KAKEIBO") }}</p>
            </div>
            <div class="mb-4">
                <button type="button" class="btn btn-primary">
                    <i class="text-right fas fa-plus-circle"></i> NEW {{ env("KAKEIBO") }}
                </button>
            </div>
            <div class="bg-light rounded p-4" style="width: 100%; height: 300px;">
            <div id="account-deck"></div>
        </div>
    </div>
</div>
@endsection
